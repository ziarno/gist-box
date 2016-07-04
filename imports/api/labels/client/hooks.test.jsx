import React from 'react'
import {chai} from 'meteor/practicalmeteor:chai'
import StubCollections from 'meteor/hwillson:stub-collections'
import {sinon} from 'meteor/practicalmeteor:sinon'
import Gists from '../../gists/Gists'
import Labels from '../Labels'
import {onAfterUpdate, onAfterRemove} from '../hooks-functions'

const {expect} = chai

describe('labels hooks', function () {
  const testGistId = 'gistId1'
  const testUserId = 'testUserId'
  const testLabel1 = 'testLabel1'
  const testLabel2 = 'testLabel2'

  beforeEach(function () {
    StubCollections.stub(Gists)
    StubCollections.stub(Labels)
    Gists.insert({
      id: testGistId,
      labels: [testLabel1]
    })
    sinon.stub(Meteor, 'userId').returns(testUserId)
    Meteor.call('createLabel', {label: testLabel1})
    Meteor.call('createLabel', {label: testLabel2})
  })

  afterEach(function () {
    StubCollections.restore(Gists)
    StubCollections.restore(Labels)
    Meteor.userId.restore()
  })

  it('updates a Gist\'s labels field when editing Labels', function () {
    let gist
    Meteor.call('addLabelToGist', {
      label: testLabel2,
      gistId: testGistId
    })
    onAfterUpdate(
      testUserId,
      {label: testLabel2},
      null,
      {$addToSet: {gistIds: testGistId}}
    )
    gist = Gists.findOne({id: testGistId})
    expect(
      gist.labels.length
    ).to.equal(2)
    expect(
      gist.labels[1]
    ).to.equal(testLabel2)
  })

  it('updates a Gist\'s labels field when removing Labels', function () {
    let gist
    Meteor.call('removeLabel', {label: testLabel2})
    onAfterRemove(testUserId, {label: testLabel2, gistIds: [testGistId]})
    gist = Gists.findOne({id: testGistId})
    expect(
      gist.labels.length
    ).to.equal(1)
  })

})