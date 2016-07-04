import React from 'react'
import {Meteor} from 'meteor/meteor'
import Labels from '../Labels'

Meteor.publish('labels', function () {
  if (!this.userId) {
    return void this.ready()
  }

  return Labels.find({
    userId: this.userId
  })
})