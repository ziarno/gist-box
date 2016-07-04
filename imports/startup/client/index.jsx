import React from 'react'
import ReactDOM from 'react-dom'
import {Meteor} from 'meteor/meteor'
import AppContainer from '../../ui/containers/AppContainer'

import './config'
import '../../api/gists/hooks'
import '../../api/labels/hooks'
import '../../api/labels/methods'

Meteor.startup(function () {
  ReactDOM.render(
    <AppContainer />,
    document.getElementById('root')
  )
})