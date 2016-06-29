import React from 'react'
import {mount} from 'enzyme'
import {chai} from 'meteor/practicalmeteor:chai'
import GistDetails from '../GistDetails'

const {expect} = chai

describe('GistDetails', function () {
  const title = 'Details'
  const gistDetails = mount(<GistDetails />)

  it('renders a title', function () {
    expect(gistDetails.find('h3').text()).to.equal(title)
  })

})