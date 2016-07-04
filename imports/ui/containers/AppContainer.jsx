import React from 'react'
import App from '../components/App'
import {createContainer} from 'meteor/react-meteor-data'
import {Meteor} from 'meteor/meteor'

export default createContainer(function () {
  const userData = Meteor.subscribe('userData')
  const labels = Meteor.subscribe('labels')
  const user = Meteor.user()
  return {
    ready: user && userData.ready() && labels.ready()
  }
}, App)