import React from 'react'
import {Meteor} from 'meteor/meteor'
import {request} from '../github'
import {HTTP} from 'meteor/http'
import _ from 'underscore'

function getGists(url) {
  return request({
    url,
    userId: Meteor.userId()
  })
}

function upsertGist(gist, gistId) {
  const method = gistId ? 'PATCH' : 'POST'
  const url = 'gists' + (gistId ? `/${gistId}` : '')

  return request({
    method,
    url,
    data: gist,
    userId: Meteor.userId()
  })
}

Meteor.methods({

  getOwnGists() {
    this.unblock()
    return getGists.call(this, 'gists')
  },

  getStarredGists() {
    this.unblock()
    return getGists.call(this, 'gists/starred')
  },

  getGistDetails({gistId}) {
    this.unblock()
    return getGists.call(this, `gists/${gistId}`)
  },

  getAllGists() {
    function getArrayData(methodName) {
      try {
        return Meteor.call(methodName).data
      } catch (e) {
        return []
      }
    }

    this.unblock()
    const ownGists = getArrayData('getOwnGists')
    const starredGists = getArrayData('getStarredGists')

    return [...ownGists, ...starredGists]
  },

  createGist({gist}) {
    this.unblock()
    return upsertGist.call(this, gist)
  },

  editGist({gist, gistId}) {
    this.unblock()
    return upsertGist.call(this, gist, gistId)
  },

  removeGist({gistId}) {
    this.unblock()
    return request({
      method: 'DELETE',
      url: `gists/${gistId}`,
      userId: Meteor.userId()
    })
  }
})