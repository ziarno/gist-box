import React from 'react'
import GistGroupLabel from './GistGroupLabel'
import _ from 'underscore'
import Gists from '../../api/gists/Gists'
import {Session} from 'meteor/session'
import Label from './Label'

const propTypes = {
  gists: React.PropTypes.arrayOf(
    React.PropTypes.object
  ).isRequired,
  labels: React.PropTypes.arrayOf(
    React.PropTypes.object
  ),
  user: React.PropTypes.object.isRequired
}

class Menu extends React.Component {

  constructor() {
    super()
    this.state = {
      newLabel: ''
    }
    this.createLabel = this.createLabel.bind(this)
  }

  static showGistsList(selector) {
    Session.set('gistsListSelector', selector)
  }

  createLabel() {
    Meteor.call(
      'createLabel',
      {label: this.state.newLabel},
      (err) => {
        if (!err) {
          this.setState({
            newLabel: ''
          })
        }
      })
  }

  render() {
    const {user, labels} = this.props
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
                onClick={Menu.showGistsList.bind(Menu, selector)}
              />
            </li>
          ))}
        </ul>
        <h4>Labels</h4>
        <input
          placeholder="New label"
          value={this.state.newLabel}
          onChange={(e) => this.setState({
            newLabel: e.target.value
          })}
        />
        <button onClick={this.createLabel}>
          Create label
        </button>
        <ul>
          {_.map(labels, ({label, gistIds}) => (
            <li key={label}>
              <Label
                label={label}
                count={gistIds.length}
                onClick={() => Menu.showGistsList({
                  labels: label
                })}
                onRemove={() => Meteor.call('removeLabel', {label})}
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