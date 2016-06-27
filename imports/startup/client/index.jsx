import React from 'react'
import ReactDOM from 'react-dom'
import {Meteor} from 'meteor/meteor'
import AppContainer from '../../containers/AppContainer'

Meteor.startup(function () {
  ReactDOM.render(
    <AppContainer />,
    document.getElementById('root')
  )
})