import React from 'react'
import {shallow, mount} from 'enzyme'
import {chai} from 'meteor/practicalmeteor:chai'
import GistsManager from '../GistsManager'

const {expect} = chai

describe('GistsManager', function () {
  const gistsManager = mount(<GistsManager />)

  it('renders menu', function () {
    expect(gistsManager.find('.menu').isEmpty()).to.be.false
  })

  it('renders gists list', function () {
    expect(gistsManager.find('.gists-list').isEmpty()).to.be.false
  })

  it('renders gist details', function () {
    expect(gistsManager.find('.gist-details').isEmpty()).to.be.false
  })

})