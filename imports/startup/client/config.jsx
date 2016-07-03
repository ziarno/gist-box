import React from 'react'
import {Meteor} from 'meteor/meteor'
import {Accounts} from 'meteor/accounts-base'
import _ from 'underscore'
import {Session} from 'meteor/session'

const MeteorCall = Meteor.call

Meteor.call = function (...args) {
  const callback = args[args.length - 1]

  if (!_.isFunction(callback)) {
    return MeteorCall.apply(Meteor, args)
  }

  Session.set('loading', true)
  MeteorCall.call(Meteor, ...args.slice(0, -1), function (...callbackArgs) {
    Session.set('loading', false)
    callback(...callbackArgs)
  })
}

Accounts.ui.config({
  requestPermissions: {
    github: ['gist', 'user:email']
  }
})
