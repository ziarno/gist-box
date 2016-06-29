import React from 'react'
import Menu from './Menu'
import GistsList from './GistsList'
import GistDetails from './GistDetails'
import Gists from '../../api/gists/Gists'
import _ from 'underscore'

const propTypes = {
  gists: React.PropTypes.arrayOf(
    React.PropTypes.object
  ).isRequired,
  user: React.PropTypes.object.isRequired
}

class GistsManager extends React.Component {

  constructor() {
    super()
    this.state = {
      gistsToShow: []
    }
    this.showGistsList = this.showGistsList.bind(this)
    this.showGistDetails = this.showGistDetails.bind(this)
  }

  fetchGists() {
    Meteor.call('getAllGists', function (err, gists) {
      if (!err) {
        Gists.remove({})
        gists.forEach(gist => Gists.insert({
          _id: gist.id,
          ...gist
        }))
      }
    })
  }

  componentDidMount() {
    this.fetchGists()
  }

  showGistsList(gistsToShow) {
    this.setState({
      gistsToShow
    })
  }

  showGistDetails(gist) {
    //TODO
  }

  render() {
    const {gists, user} = this.props
    const {gistsToShow} = this.state

    return (
      <div className="gists-manager">
        <Menu
          gists={gists}
          user={user}
          onShowGists={this.showGistsList}
        />
        <GistsList
          gists={gistsToShow}
          onShowGist={this.showGistDetails}
        />
        <GistDetails />
      </div>
    )
  }

}

GistsManager.propTypes = propTypes

export default GistsManager