import React from 'react'
import {shallow, mount} from 'enzyme'
import {chai} from 'meteor/practicalmeteor:chai'
import Header from '../Header'
import {Session} from 'meteor/session'
import {Tracker} from 'meteor/tracker'

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

  it('sets loading state depending on a Session variable', function () {
    const header = mount(<Header />)
    expect(
      header.instance().state.loading
    ).to.not.be.ok
    Session.set('loading', true)
    Tracker.flush()
    expect(
      header.instance().state.loading
    ).to.be.true
  })

})