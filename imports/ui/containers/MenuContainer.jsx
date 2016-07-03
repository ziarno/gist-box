import React from 'react'
import {Meteor} from 'meteor/meteor'
import Menu from '../components/Menu'
import {createContainer} from 'meteor/react-meteor-data'
import Gists from '../../api/gists/Gists'

export default createContainer(function () {
  return {
    gists: Gists.find().fetch(),
    user: Meteor.user()
  }
}, Menu)