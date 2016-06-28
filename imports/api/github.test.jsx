import React from 'react'
import {Meteor} from 'meteor/meteor'
import {HTTP} from 'meteor/http'
import {chai} from 'meteor/practicalmeteor:chai'
import {sinon} from 'meteor/practicalmeteor:sinon'
import StubCollections from 'meteor/hwillson:stub-collections'
import {getToken, request} from './github'

const {assert, expect} = chai

if (Meteor.isServer) {
  describe('github', function () {

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
    })

    afterEach(function () {
      StubCollections.restore(Meteor.users)
      HTTP.call.restore()
    })

    describe('getToken', function () {
      it('retrieves oauth token from a user', function () {
        expect(getToken(testUserId)).to.equal(testAccessToken)
      })
    })

    describe('request', function () {
      it('makes a default GET request', function () {
        request({
          url: 'gists',
          userId: testUserId
        })

        assert(HTTP.call.calledWith(
          'GET',
          'https://api.github.com/gists',
          {
            data: {},
            headers
          }
        ))
      })

      it('makes a customized request', function () {
        request({
          method: 'POST',
          url: 'gists/123',
          data: {
            test: 'test'
          },
          userId: testUserId
        })

        assert(HTTP.call.calledWith(
          'POST',
          'https://api.github.com/gists/123',
          {
            data: {
              test: 'test'
            },
            headers
          }
        ))
      })

    })

  })
}