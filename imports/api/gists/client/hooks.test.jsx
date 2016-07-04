import React from 'react'
import {chai} from 'meteor/practicalmeteor:chai'
import StubCollections from 'meteor/hwillson:stub-collections'
import {sinon} from 'meteor/practicalmeteor:sinon'
import Gists from '../Gists'
import Labels from '../../labels/Labels'

import {onAfterUpsert} from '../hooks-functions'

const {assert} = chai

describe('gists hooks', function () {
  const testUserId = 'testUserId'
  const testLabel = 'testLabel'
  const testGistId = 'gistId1'

  beforeEach(function () {
    StubCollections.stub(Labels)
    StubCollections.stub(Gists)
    sinon.stub(Meteor, 'userId').returns(testUserId)
    sinon.stub(Gists.direct, 'update')
    Meteor.call('createLabel', {label: testLabel})
    Meteor.call('addLabelToGist', {
      label: testLabel,
      gistId: testGistId
    })
  })

  afterEach(function () {
    StubCollections.restore(Labels)
    StubCollections.restore(Gists)
    Gists.direct.update.restore()
    Meteor.userId.restore()
  })

  it('populates a Gists collection item with a labels field ' +
     'from the Labels collection when inserting a gist', function () {
    Gists.insert({
      id: testGistId
    })
    onAfterUpsert(
      testUserId,
      {id: testGistId}
    )
    assert(
      Gists.direct.update.calledWith({
        id: testGistId
      }, {
        $set: {
          labels: [testLabel]
        }
      })
    )
  })

})