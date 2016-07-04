import React from 'react'
import {Meteor} from 'meteor/meteor'
import {chai} from 'meteor/practicalmeteor:chai'
import {sinon} from 'meteor/practicalmeteor:sinon'
import StubCollections from 'meteor/hwillson:stub-collections'
import Labels from './Labels'

import './methods'

const {expect} = chai

describe('labels methods', function () {
  const testUserId = 'testUserId'

  beforeEach(function () {
    sinon.stub(Meteor, 'userId').returns(testUserId)
    StubCollections.stub(Labels)
    Labels.insert({
      userId: testUserId,
      label: 'testLabel',
      gistIds: ['gistId1', 'gistId2']
    })
  })

  afterEach(function () {
    StubCollections.restore(Labels)
    Meteor.userId.restore()
  })

  describe('createLabel', function () {
    it('creates a new label', function () {
      Meteor.call('createLabel', {label: 'testLabel2'})
      expect(
        Labels.find().fetch().length
      ).to.equal(2)
    })
  })

  describe('removeLabel', function () {
    it('removes a label', function () {
      Meteor.call('removeLabel', {label: 'testLabel'})
      expect(
        Labels.find().fetch().length
      ).to.equal(0)
    })
  })

  describe('addLabelToGist', function () {
    it('updates a label\'s gistIds list', function () {
      Meteor.call('addLabelToGist', {
        label: 'testLabel',
        gistId: 'gistId3'
      })
      expect(
        Labels.findOne({
          label: 'testLabel'
        }).gistIds.length
      ).to.equal(3)
    })
  })

  describe('removeLabelFromGist', function () {
    it('updates a label\'s gistIds list', function () {
      Meteor.call('removeLabelFromGist', {
        label: 'testLabel',
        gistId: 'gistId2'
      })
      expect(
        Labels.findOne({
          label: 'testLabel'
        }).gistIds.length
      ).to.equal(1)
    })
  })

})