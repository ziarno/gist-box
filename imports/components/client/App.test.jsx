import React from 'react'
import {mount} from 'enzyme'
import {chai} from 'meteor/practicalmeteor:chai'
import App from '../App'

const {expect} = chai

describe('App', function () {
  const userMock = {
    userId: 'testUserId'
  }
  const app = mount(<App user={userMock} />)

  it('renders a header', function () {
    expect(app.find('.header').isEmpty()).to.be.false
  })

  it('takes a user prop', function () {
    expect(app.prop('user')).to.equal(userMock)
  })

})