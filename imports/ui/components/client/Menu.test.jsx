import React from 'react'
import {mount} from 'enzyme'
import {chai} from 'meteor/practicalmeteor:chai'
import Menu from '../Menu'

const {expect} = chai

describe('Menu', function () {
  const title = 'Menu'
  const menu = mount(<Menu />)

  it('renders a title', function () {
    expect(menu.find('h3').text()).to.equal(title)
  })

})