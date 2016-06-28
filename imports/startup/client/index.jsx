import React from 'react'
import ReactDOM from 'react-dom'
import {Meteor} from 'meteor/meteor'
import AppContainer from '../../ui/containers/AppContainer'

import './accounts-config'

Meteor.startup(function () {
  ReactDOM.render(
    <AppContainer />,
    document.getElementById('root')
  )
})