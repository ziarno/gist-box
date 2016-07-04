import React from 'react'
import {mount} from 'enzyme'
import {chai} from 'meteor/practicalmeteor:chai'
import App from '../App'
import {sinon} from 'meteor/practicalmeteor:sinon'
import {user} from '../../../mocks'

const {expect} = chai

describe('App', function () {
  it('renders a header', function () {
    const app = mount(<App />)
    expect(app.find('.header').isEmpty()).to.be.false
  })

  it('does not render GistsManager if not ready', function () {
    const app = mount(<App />)
    expect(app.find('.gists-manager').isEmpty()).to.be.true
  })

  it('renders GistsManager if ready', function () {
    sinon.stub(Meteor, 'user').returns(user)
    const app = mount(<App ready />)
    expect(app.find('.gists-manager').isEmpty()).to.be.false
    Meteor.user.restore()
  })

})