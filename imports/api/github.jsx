import React from 'react'
import {Meteor} from 'meteor/meteor'
import {HTTP} from 'meteor/http'

export function getToken(userId) {
  const user = Meteor.users.findOne(userId, {
    fields: {
      'services.github.accessToken': 1
    }
  })
  const token = user && user.services.github.accessToken

  return token
}

export function request({
  method ='GET',
  url,
  data = {},
  userId
  }) {
  const requestUrl = `https://api.github.com/${url}`
  const token = getToken(userId)

  return HTTP.call(method, requestUrl, {
    data,
    headers: {
      'User-Agent': 'GistBox-ziarno7',
      Authorization: `token ${token}`
    }
  })
}