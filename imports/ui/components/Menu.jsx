import React from 'react'
import GistGroupLabel from './GistGroupLabel'
import _ from 'underscore'
import Gists from '../../api/gists/Gists'
import {Session} from 'meteor/session'

const propTypes = {
  gists: React.PropTypes.arrayOf(
    React.PropTypes.object
  ).isRequired,
  user: React.PropTypes.object.isRequired
}

class Menu extends React.Component {

  constructor() {
    super()
    this.showGistsList = this.showGistsList.bind(this)
  }

  showGistsList(selector) {
    Session.set('gistsListSelector', selector)
  }

  render() {
    const {user} = this.props
    const githubUserId = user.services.github.id
    const menuLabels = [{
      title: 'My Gists',
      selector: {
        'owner.id': githubUserId
      }
    }, {
      title: 'Starred Gists',
      selector: {
        'owner.id': {$ne: githubUserId}
      }
    }]

    return (
      <div className="menu column">
        <h3>Menu</h3>
        <ul>
          {_.map(menuLabels, ({title, selector}, index) => (
            <li key={index}>
              <GistGroupLabel
                count={Gists.find(selector).count()}
                title={title}
                onClick={() => this.showGistsList(selector)}
              />
            </li>
          ))}
        </ul>
      </div>
    )
  }

}

Menu.propTypes = propTypes

export default Menu