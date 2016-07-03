import React from 'react'
import GistsListContainer from '../containers/GistsListContainer'
import GistDetailsContainer from '../containers/GistDetailsContainer'
import MenuContainer from '../containers/MenuContainer'
import Gists from '../../api/gists/Gists'

class GistsManager extends React.Component {

  static fetchGists() {
    Meteor.call('getAllGists', function (err, gists) {
      if (!err) {
        Gists.remove({})
        gists.forEach(gist => Gists.insert(gist))
      }
    })
  }

  componentDidMount() {
    GistsManager.fetchGists()
  }

  render() {
    return (
      <div className="gists-manager">
        <MenuContainer />
        <GistsListContainer />
        <GistDetailsContainer />
      </div>
    )
  }

}

export default GistsManager