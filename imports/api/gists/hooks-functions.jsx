import React from 'react'
import Gists from './Gists'
import Labels from '../labels/Labels'

export function onAfterUpsert(userId, gistDoc) {
  const labels = Labels.find({
    userId,
    gistIds: gistDoc.id
  }, {
    fields: {
      label: 1
    }
  }).fetch()

  if (labels.length) {
    Gists.direct.update({
      id: gistDoc.id
    }, {
      $set: {
        labels: labels.map(l => l.label)
      }
    })
  }
}

export function onAfterRemove(userId, {id, labels}) {
  if (labels.length) {
    labels.forEach(label => {
      Meteor.call('removeLabelFromGist', {
        label,
        gistId: id
      })
    })
  }
}