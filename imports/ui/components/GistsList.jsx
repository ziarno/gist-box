import React from 'react'
import GistListItem from './GistListItem'
import _ from 'underscore'
import {Session} from 'meteor/session'
import Gists from '../../api/gists/Gists'

const propTypes = {
  gists: React.PropTypes.arrayOf(
    React.PropTypes.object
  ),
  activeGist: React.PropTypes.object
}

class GistList extends React.Component {

  static showGistDetails(gist) {
    const gistId = gist.id

    if (Session.equals('gistIdToShowDetails', gistId)) {
      return
    }

    Meteor.call('getGistDetails', {gistId}, (err, {data: gist}) => {
      if (!err) {
        Gists.upsert({
          id: gist.id
        }, gist)
        Session.set('gistIdToShowDetails', gist.id)
      }
    })
  }

  render () {
    const {gists, activeGist} = this.props

    return (
      <div className="gists-list column">
        <h3>Gists</h3>
        {_.map(gists, gist => (
          <GistListItem
            key={gist.id}
            gist={gist}
            onClick={GistList.showGistDetails}
            active={activeGist && activeGist.id === gist.id}
          />
        ))}
      </div>
    )
  }

}

GistList.propTypes = propTypes

export default GistList