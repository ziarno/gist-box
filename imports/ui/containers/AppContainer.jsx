import React from 'react'
import App from '../components/App'
import {createContainer} from 'meteor/react-meteor-data'

export default createContainer(function () {
  const userData = Meteor.subscribe('userData')
  const user = Meteor.user()
  return {
    user,
    ready: user && userData.ready()
  }
}, App)