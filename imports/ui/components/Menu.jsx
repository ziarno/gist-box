import React from 'react'
import GistGroupLabel from './GistGroupLabel'
import _ from 'underscore'

const propTypes = {
  gists: React.PropTypes.arrayOf(
    React.PropTypes.object
  ).isRequired,
  user: React.PropTypes.object.isRequired,
  onShowGists: React.PropTypes.func.isRequired
}

class Menu extends React.Component {

  constructor() {
    super()
  }

  render() {
    const {gists, user, onShowGists} = this.props
    const githubUserId = user.services.github.id
    const [myGists, starredGists] = _(gists)
      .partition(gist => gist.owner.id === githubUserId)

    return (
      <div className="menu column">
        <h3>Menu</h3>
        <ul>
          <li>
            <GistGroupLabel
              gists={myGists}
              title="My Gists"
              onClick={onShowGists}
            />
          </li>
          <li>
            <GistGroupLabel
              gists={starredGists}
              title="Starred Gists"
              onClick={onShowGists}
            />
          </li>
        </ul>
      </div>
    )
  }

}

Menu.propTypes = propTypes

export default Menu