import React from 'react'
import Labels from './Labels'
import {Meteor} from 'meteor/meteor'

Meteor.methods({

  createLabel({label}) {
    return Labels.insert({
      userId: Meteor.userId(),
      label,
      gistIds: []
    })
  },

  removeLabel({label}) {
    return Labels.remove({
      userId: Meteor.userId(),
      label
    })
  },

  addLabelToGist({label, gistId}) {
    return Labels.update({
      userId: Meteor.userId(),
      label
    }, {
      $addToSet: {
        gistIds: gistId
      }
    })
  },

  removeLabelFromGist({label, gistId}) {
    return Labels.update({
      userId: Meteor.userId(),
      label
    }, {
      $pull: {
        gistIds: gistId
      }
    })
  }

})
