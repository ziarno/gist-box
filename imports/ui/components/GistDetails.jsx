import React from 'react'
import GistDetailsDisplay from './GistDetailsDisplay'
import GistDetailsEdit from './GistDetailsEdit'
import Gists from '../../api/gists/Gists'

const propTypes = {
  gist: React.PropTypes.object,
  user: React.PropTypes.object.isRequired
}

class GistDetails extends React.Component {

  constructor() {
    super()
    this.state = {
      editMode: false,
      createNew: false
    }
    this.onSave = this.onSave.bind(this)
    this.setDisplayMode = this.setDisplayMode.bind(this)
    this.onRemove = this.onRemove.bind(this)
    this.onEdit = this.onEdit.bind(this)
    this.onCreateNew = this.onCreateNew.bind(this)
  }

  onSave(gist) {
    const {createNew} = this.state
    const methodName = createNew ?
      'createGist' : 'editGist'
    const gistId = this.props.gist && this.props.gist.id

    _.each(gist.files, ({content}, fileName) => {
      if (!content) {
        delete gist.files[fileName]
      }
    })

    if (!createNew && this.props.gist) {
      _.each(this.props.gist.files, (val, fileName) => {
        gist.files[fileName] = gist.files[fileName] || null
      })
    }

    Meteor.call(methodName, {
      gist,
      gistId
    }, (err, {data: gist}) => {
      if (!err) {
        Gists.upsert({
          id: gist.id
        }, gist)
        this.setState({
          editMode: false,
          createNew: false
        })
        Session.set('gistIdToShowDetails', gist.id)
      }
    })
  }

  setDisplayMode() {
    this.setState({
      editMode: false,
      createNew: false
    })
  }

  onRemove() {
    const {id: gistId} = this.props.gist
    Meteor.call('removeGist', {gistId}, err => {
      if (!err) {
        Gists.remove({id: gistId})
      }
    })
  }

  onEdit() {
    this.setState({
      editMode: true
    })
  }

  onCreateNew() {
    this.setState({
      editMode: true,
      createNew: true
    })
  }

  componentWillReceiveProps() {
    this.setDisplayMode()
  }

  render() {
    const {gist, user} = this.props

    return (
      <div className="gist-details column">
        <h3>Details</h3>
        <button onClick={this.onCreateNew}>
          Create new gist
        </button>
        {this.state.editMode ? (
          <GistDetailsEdit
            gist={gist}
            onSave={this.onSave}
            onCancel={this.setDisplayMode}
            onRemove={this.onRemove}
            createNew={this.state.createNew}
          />
        ) : gist ? (
          <GistDetailsDisplay
            gist={gist}
            isEditable={user.services.github.id === gist.owner.id}
            onEdit={this.onEdit}
            onRemove={this.onRemove}
          />
        ) : null}
      </div>
    )
  }

}

GistDetails.propTypes = propTypes

export default GistDetails