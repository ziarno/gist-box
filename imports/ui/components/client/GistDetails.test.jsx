import React from 'react'
import {mount, render} from 'enzyme'
import {chai} from 'meteor/practicalmeteor:chai'
import GistDetails from '../GistDetails'
import {gists, user} from '../../../mocks'
import {sinon} from 'meteor/practicalmeteor:sinon'

const {expect, assert} = chai

describe('GistDetails', function () {
  const title = 'Details'
  const gist = gists[0]
  let gistDetails

  beforeEach(function () {
    sinon.stub(Meteor, 'call')
    gistDetails = mount(
      <GistDetails
        gist={gist}
        user={user}
      />
    )
  })

  afterEach(function () {
    Meteor.call.restore()
  })

  it('renders a title', function () {
    expect(
      gistDetails.find('h3').text()
    ).to.equal(title)
  })

  it('renders details display in display mode', function () {
    expect(
      gistDetails.find('.gist-details--display').isEmpty()
    ).to.equal(false)
  })

  it('renders details edit in edit mode', function () {
    gistDetails.setState({
      editMode: true
    })
    expect(
      gistDetails.find('.gist-details--edit').isEmpty()
    ).to.equal(false)
  })

  it('calls removeGist method', function () {
    gistDetails.instance().onRemove()
    assert(Meteor.call.calledWith('removeGist', {
      gistId: gist.id
    }))
  })

  it('calls createGist method', function () {
    gistDetails.setState({
      createNew: true
    })
    gistDetails.instance().onSave(gist)
    assert(Meteor.call.calledWith('createGist', {
      gist,
      gistId: gist.id
    }))
  })

  it('calls editGist method', function () {
    gistDetails.setState({
      createNew: false
    })
    gistDetails.instance().onSave(gist)
    assert(Meteor.call.calledWith('editGist', {
      gist,
      gistId: gist.id
    }))
  })

})