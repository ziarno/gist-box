import React from 'react'
import ReactDOM from 'react-dom'
import {Meteor} from 'meteor/meteor'
import HelloWorld from '../../components/HelloWorld'

Meteor.startup(function () {
  ReactDOM.render(<HelloWorld />, document.getElementById('root'));
})