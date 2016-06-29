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

  it('does not display GistsManager if user is not logged in', function () {
    const app = mount(<App />)
    expect(app.find('.gists-manager').isEmpty()).to.be.true
  })

  it('renders GistsManager if user is logged in', function () {
    const app = mount(<App user={userMock} />)
    expect(app.find('.gists-manager').isEmpty()).to.be.false
  })

})