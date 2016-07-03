import React from 'react'
import {Meteor} from 'meteor/meteor'
import GistsList from '../components/GistsList'
import {createContainer} from 'meteor/react-meteor-data'
import Gists from '../../api/gists/Gists'
import {Session} from 'meteor/session'

export default createContainer(function () {
  return {
    gists: Gists.find(Session.get('gistsListSelector')).fetch(),
    user: Meteor.user(),
    activeGist: Gists.findOne({
      id: Session.get('gistIdToShowDetails')
    })
  }
}, GistsList)