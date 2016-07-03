import React from 'react'
import {mount} from 'enzyme'
import {chai} from 'meteor/practicalmeteor:chai'
import GistsManager from '../GistsManager'
import {gists, user} from '../../../mocks'
import {sinon} from 'meteor/practicalmeteor:sinon'

const {expect} = chai

describe('GistsManager', function () {
  let gistsManager

  beforeEach(function () {
    sinon.stub(Meteor, 'user').returns(user)
    sinon.stub(Meteor, 'call')
    gistsManager = mount(
      <GistsManager />
    )
  })

  afterEach(function () {
    Meteor.user.restore()
    Meteor.call.restore()
  })

  it('renders menu', function () {
    expect(gistsManager.find('.menu').isEmpty()).to.be.false
  })

  it('renders gists list', function () {
    expect(gistsManager.find('.gists-list').isEmpty()).to.be.false
  })

  it('renders gist details', function () {
    expect(gistsManager.find('.gist-details').isEmpty()).to.be.false
  })

  it('fetches users after mounting', function () {
    assert(Meteor.call.calledWith('getAllGists'))
  })

})