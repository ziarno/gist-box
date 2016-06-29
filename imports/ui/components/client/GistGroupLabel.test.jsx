import React from 'react'
import {shallow} from 'enzyme'
import {chai} from 'meteor/practicalmeteor:chai'
import GistGroupLabel from '../GistGroupLabel'
import {gists} from '../../../mocks'

const {expect} = chai

describe('GistGroupLabel', function () {
  const title = 'Test Gists'
  const count = gists.length
  const gistsList = shallow(
    <GistGroupLabel
      title={title}
      gists={gists}
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

})