import React from 'react'
import {mount} from 'enzyme'
import {chai} from 'meteor/practicalmeteor:chai'
import App from '../App'
import {user} from '../../../mocks'

const {expect} = chai

describe('App', function () {
  it('renders a header', function () {
    const app = mount(<App user={user} />)
    expect(app.find('.header').isEmpty()).to.be.false
  })

  it('takes a user prop', function () {
    const app = mount(<App user={user} />)
    expect(app.prop('user')).to.equal(user)
  })

  it('does not display GistsManager if user is not logged in', function () {
    const app = mount(<App />)
    expect(app.find('.gists-manager').isEmpty()).to.be.true
  })

  it('renders GistsManager if user is logged in', function () {
    const app = mount(<App user={user} ready />)
    expect(app.find('.gists-manager').isEmpty()).to.be.false
  })

})