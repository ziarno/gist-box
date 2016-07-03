import React from 'react'
import {mount} from 'enzyme'
import {chai} from 'meteor/practicalmeteor:chai'
import GistsList from '../GistsList'
import {gists} from '../../../mocks'

const {expect} = chai

describe('GistsList', function () {
  const title = 'Gists'
  const activeGist = gists[0]
  const gistsList = mount(
    <GistsList
      gists={gists}
      activeGist={activeGist}
    />
  )

  it('renders a title', function () {
    expect(
      gistsList.find('h3').text()
    ).to.equal(title)
  })

  it('renders GistListItems', function () {
    expect(
      gistsList.find('.gist-list-item').length
    ).to.equal(gists.length)
  })

})