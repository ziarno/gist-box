import React from 'react'
import App from '../components/App'
import {createContainer} from 'meteor/react-meteor-data'

const AppContainer = createContainer(function () {
  return {
    user: Meteor.user()
  }
}, App)

export default AppContainer