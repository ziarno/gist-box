import React from 'react'
import App from '../components/App'
import {createContainer} from 'meteor/react-meteor-data'

export default createContainer(function () {
  return {
    user: Meteor.user()
  }
}, App)