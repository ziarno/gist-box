import React from 'react'
import {Meteor} from 'meteor/meteor'
import {HTTP} from 'meteor/http'
import {chai} from 'meteor/practicalmeteor:chai'
import {sinon} from 'meteor/practicalmeteor:sinon'
import StubCollections from 'meteor/hwillson:stub-collections'
import '../methods'

const {assert} = chai

describe('gists methods', function () {

  const testUserId = 'testUserId'
  const testAccessToken = 'testAccessToken'
  const headers = {
    'User-Agent': 'GistBox-ziarno7',
    Authorization: `token ${testAccessToken}`
  }

  beforeEach(function () {
    StubCollections.stub(Meteor.users)
    Meteor.users.insert({
      _id: testUserId,
      services: {
        github: {
          accessToken: testAccessToken
        }
      }
    })
    sinon.stub(HTTP, 'call');
    sinon.stub(Meteor, 'userId').returns(testUserId)
  })

  afterEach(function () {
    StubCollections.restore(Meteor.users)
    HTTP.call.restore()
    Meteor.userId.restore()
  })

  describe('getOwnGists', function () {
    it('makes a correct call to get users own gists', function () {
      Meteor.call('getOwnGists')

      assert(HTTP.call.calledWith(
        'GET',
        'https://api.github.com/gists',
        {
          data: {},
          headers
        }
      ))
    })
  })

  describe('getStarredGists', function () {
    it('makes a correct call to get starred gists', function () {
      Meteor.call('getStarredGists')

      assert(HTTP.call.calledWith(
        'GET',
        'https://api.github.com/gists/starred',
        {
          data: {},
          headers
        }
      ))
    })
  })

  describe('getGistDetails', function () {
    it('makes a correct call to get gist details', function () {
      const gistId = 'testGistId'
      Meteor.call('getGistDetails', {gistId})

      assert(HTTP.call.calledWith(
        'GET',
        `https://api.github.com/gists/${gistId}`,
        {
          data: {},
          headers
        }
      ))
    })
  })

  describe('getAllGists', function () {

    it('makes a correct call to get users own and starred gists', function () {
      Meteor.call('getAllGists')

      assert(HTTP.call.getCall(0).calledWith(
        'GET',
        'https://api.github.com/gists',
        {
          data: {},
          headers
        }
      ))
      assert(HTTP.call.getCall(1).calledWith(
        'GET',
        'https://api.github.com/gists/starred',
        {
          data: {},
          headers
        }
      ))
    })
  })

  describe('createGist', function () {
    it('makes a correct call to create a gist', function () {
      const gist = {
        description: 'test description',
        public: true,
        files: {
          'test.js': {
            content: 'test content'
          }
        }
      }
      Meteor.call('createGist', {gist})

      assert(HTTP.call.calledWith(
        'POST',
        'https://api.github.com/gists',
        {
          data: gist,
          headers
        }
      ))
    })
  })

  describe('editGist', function () {
    it('makes a correct call to edit a gist', function () {
      const gist = {
        description: 'test description',
        public: true,
        files: {
          'test.js': {
            content: 'test content'
          }
        }
      }
      const gistId = 'testGistId'
      Meteor.call('editGist', {gist, gistId})

      assert(HTTP.call.calledWith(
        'PATCH',
        `https://api.github.com/gists/${gistId}`,
        {
          data: gist,
          headers
        }
      ))
    })
  })

  describe('removeGist', function () {
    it('makes a correct call to remove a gist', function () {
      const gistId = 'testGistId'
      Meteor.call('removeGist', {gistId})

      assert(HTTP.call.calledWith(
        'DELETE',
        `https://api.github.com/gists/${gistId}`,
        {
          data: {},
          headers
        }
      ))
    })
  })

})