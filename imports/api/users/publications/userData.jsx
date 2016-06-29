import React from 'react'
import {Meteor} from 'meteor/meteor'

Meteor.publish('userData', function () {
  if (!this.userId) {
    return void this.ready()
  }

  return Meteor.users.find(this.userId, {fields: {
    'services.github.id': 1
  }})
})