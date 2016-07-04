import React from 'react'
import {chai} from 'meteor/practicalmeteor:chai'
import StubCollections from 'meteor/hwillson:stub-collections'
import {sinon} from 'meteor/practicalmeteor:sinon'
import Gists from '../Gists'
import Labels from '../../labels/Labels'

import {onAfterInsert} from '../hooks-functions'

const {expect} = chai

describe('gists hooks', function () {
  const testUserId = 'testUserId'
  const testLabel = 'testLabel'
  const testGistId = 'gistId1'

  beforeEach(function () {
    StubCollections.stub(Labels)
    StubCollections.stub(Gists)
    sinon.stub(Meteor, 'userId').returns(testUserId)
    Meteor.call('createLabel', {label: testLabel})
    Meteor.call('addLabelToGist', {
      label: testLabel,
      gistId: testGistId
    })
  })

  afterEach(function () {
    StubCollections.restore(Labels)
    StubCollections.restore(Gists)
    Meteor.userId.restore()
  })

  it('populates a Gists collection item with a labels field ' +
     'from the Labels collection when inserting a gist', function () {
    let gist
    Gists.insert({
      id: testGistId
    })
    onAfterInsert(
      testUserId,
      {id: testGistId}
    )
    gist = Gists.findOne({id: testGistId})
    expect(
      gist.labels.length
    ).to.equal(1)
    expect(
      gist.labels[0]
    ).to.equal(testLabel)
  })

})