import React from 'react'
import {render} from 'enzyme'
import {chai} from 'meteor/practicalmeteor:chai'
import Menu from '../Menu'
import {gists, user} from '../../../mocks'
import {sinon} from 'meteor/practicalmeteor:sinon'
import StubCollections from 'meteor/hwillson:stub-collections'
import Gists from '../../../api/gists/Gists'

const {expect} = chai

describe('Menu', function () {
  const title = 'Menu'
  let menu

  beforeEach(function () {
    StubCollections.stub(Gists)
    gists.forEach(gist => Gists.insert(gist))
    menu = render(
      <Menu
        gists={gists}
        user={user}
      />
    )
  })

  afterEach(function () {
    StubCollections.restore(Gists)
  })

  it('renders a title', function () {
    expect(menu.find('h3').text()).to.equal(title)
  })

  it('renders 2 group label items', function () {
    expect(menu.find('.gist-group-label').length).to.equal(2)
  })

  it('renders \'My Gists\' group label item', function () {
    expect(
      menu.find('.gist-group-label--link').get(0).children[0].data
    ).to.equal('My Gists')
  })

  it('renders \'Starred Gists\' group label item', function () {
    expect(
      menu.find('.gist-group-label--link').get(1).children[0].data
    ).to.equal('Starred Gists')
  })

  it('renders correct count in \'My Gists\'', function () {
    expect(
      menu.find('.gist-group-label--count').get(0).children[0].data
    ).to.equal('(2)')
  })

  it('renders correct count in \'Starred Gists\'', function () {
    expect(
      menu.find('.gist-group-label--count').get(1).children[0].data
    ).to.equal('(1)')
  })

})