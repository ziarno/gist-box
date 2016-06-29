import React from 'react'
import {shallow} from 'enzyme'
import {chai} from 'meteor/practicalmeteor:chai'
import GistListItem from '../GistListItem'
import {gists} from '../../../mocks'
import {sinon} from 'meteor/practicalmeteor:sinon'
import _ from 'underscore'

const {assert, expect} = chai

describe('GistGroupLabel', function () {
  const spy = sinon.spy()
  const gist = gists[0]
  const gistListItem = shallow(
    <GistListItem
      gist={gist}
      onClick={spy}
    />
  )

  it('fires onClick function when clicked', function () {
    gistListItem.find('.gist-list-item').simulate('click')
    assert(spy.called)
  })

  it('renders an image', function () {
    expect(
      gistListItem.find('img').prop('src')
    ).to.equal(gist.owner.avatar_url)
  })

  it('renders correct gist info', function () {
    assert(
      gistListItem
        .find('.gist-list-item--info')
        .containsMatchingElement(
          <div className="gist-list-item--info">
            <p>Description: {gist.description}</p>
            <p>Files: {_.size(gist.files)}</p>
            <p>{gist.public ? 'Public' : 'Private'}</p>
          </div>
        )
    )
  })

})