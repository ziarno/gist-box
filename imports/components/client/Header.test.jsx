import React from 'react'
import {shallow} from 'enzyme'
import {chai} from 'meteor/practicalmeteor:chai'
import Header from '../Header'

const {assert} = chai

describe('Header', function () {

  it('renders a title', function () {
    const header = shallow(<Header />)
    assert(header.contains(<h2>GistBox</h2>))
  })

  it('renders a login field', function () {
    const header = shallow(<Header />)
    expect(header.find('#login').isEmpty()).to.be.false
  })

})