import React from 'react'
import {shallow} from 'enzyme'
import {chai} from 'meteor/practicalmeteor:chai'
import GistGroupLabel from '../GistGroupLabel'
import {sinon} from 'meteor/practicalmeteor:sinon'

const {expect} = chai

describe('GistGroupLabel', function () {
  const title = 'Test Gists'
  const count = 5
  const spy = sinon.spy()
  const gistsList = shallow(
    <GistGroupLabel
      title={title}
      count={count}
      onClick={spy}
    />
  )

  it('renders a correct title', function () {
    expect(
      gistsList.find('.gist-group-label--link').text()
    ).to.equal(title)
  })

  it('renders a correct count', function () {
    expect(
      gistsList.find('.gist-group-label--count').text()
    ).to.equal(`(${count})`)
  })

  it('calls the onClick callback', function () {
    gistsList.find('.gist-group-label--link').simulate('click')
    assert(spy.called)
  })

})