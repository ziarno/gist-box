import React from 'react'
import Menu from './Menu'
import GistsList from './GistsList'
import GistDetails from './GistDetails'
import Gists from '../../api/gists/Gists'
import _ from 'underscore'

const propTypes = {
  gists: React.PropTypes.arrayOf(
    React.PropTypes.object
  )
}

class GistsManager extends React.Component {

  fetchGists() {
    Meteor.call('getAllGists', function (err, gists) {
      if (!err) {
        Gists.remove({})
        gists.forEach(gist => Gists.insert({
          _id: gist.id,
          ..._.omit(gist, 'id')
        }))
      }
    })
  }

  componentDidMount() {
    this.fetchGists()
  }

  render() {
    return (
      <div className="gists-manager">
        <Menu />
        <GistsList />
        <GistDetails />
      </div>
    )
  }

}

GistsManager.propTypes = propTypes

export default GistsManager