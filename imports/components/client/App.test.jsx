import React from 'react'
import {mount} from 'enzyme'
import {chai} from 'meteor/practicalmeteor:chai'
import App from '../App'

const {expect} = chai

describe('App', function () {
  const userMock = {
    userId: 'testUserId'
  }

  it('renders a header', function () {
    const app = mount(<App user={userMock} />)
    expect(app.find('.header').isEmpty()).to.be.false
  })

  it('takes a user prop', function () {
    const app = mount(<App user={userMock} />)
    expect(app.prop('user')).to.equal(userMock)
  })

})