import React from 'react'
import {Meteor} from 'meteor/meteor'
import Menu from '../components/Menu'
import {createContainer} from 'meteor/react-meteor-data'
import Gists from '../../api/gists/Gists'
import Labels from '../../api/labels/Labels'

export default createContainer(function () {
  return {
    gists: Gists.find().fetch(),
    user: Meteor.user(),
    labels: Labels.find().fetch()
  }
}, Menu)