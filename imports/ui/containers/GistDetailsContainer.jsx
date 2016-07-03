import React from 'react'
import {Meteor} from 'meteor/meteor'
import GistDetails from '../components/GistDetails'
import {createContainer} from 'meteor/react-meteor-data'
import Gists from '../../api/gists/Gists'
import {Session} from 'meteor/session'

export default createContainer(function () {
  return {
    gist: Gists.findOne({
      id: Session.get('gistIdToShowDetails')
    }),
    user: Meteor.user()
  }
}, GistDetails)