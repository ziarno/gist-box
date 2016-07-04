import React from 'react'
import Gists from './Gists'
import Labels from '../labels/Labels'

export function onAfterInsert(userId, gistDoc) {
  const labels = Labels.find({
    userId,
    gistIds: gistDoc.id
  }, {
    fields: {
      label: 1
    }
  }).fetch()

  if (labels.length) {
    Gists.update({
      id: gistDoc.id
    }, {
      $set: {
        labels: labels.map(l => l.label)
      }
    })
  }

}