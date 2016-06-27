import React from 'react'
import {mount} from 'enzyme'
import {chai} from 'meteor/practicalmeteor:chai'
import GistsList from '../GistsList'

const {expect} = chai

describe('GistsList', function () {
  const title = 'Gists'
  const gistsList = mount(<GistsList />)

  it('renders a title', function () {
    expect(gistsList.find('h3').text()).to.equal(title)
  })

})