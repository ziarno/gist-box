import React from 'react'
import _ from 'underscore'
import Gists from '../gists/Gists'

export function onAfterUpdate(userId, labelDoc, fieldNames, modifier) {
  const modifierName = Object.keys(modifier)[0]

  if (!_.contains(['$pull', '$addToSet'], modifierName)) {
    return
  }

  Gists.update({
    id: modifier[modifierName].gistIds
  }, {
    [modifierName]: {
      labels: labelDoc.label
    }
  })
}

export function onAfterRemove(userId, {label, gistIds}) {
  Gists.update({
    id: {
      $in: gistIds
    }
  }, {
    $pull: {
      labels: label
    }
  })
}