import React from 'react'
import {shallow} from 'enzyme'
import {chai} from 'meteor/practicalmeteor:chai'
import GistDetailsDisplay from '../GistDetailsDisplay'
import _ from 'underscore'
import {sinon} from 'meteor/practicalmeteor:sinon'
import {gists} from '../../../mocks'

const {expect, assert} = chai

describe('GistDetailsDisplay', function () {
  const gist = gists[0]
  const isEditable = true
  let editSpy
  let removeSpy
  let gistDetailsDisplay

  beforeEach(function () {
    editSpy = sinon.spy()
    removeSpy = sinon.spy()
    gistDetailsDisplay = shallow(
      <GistDetailsDisplay
        gist={gist}
        onEdit={editSpy}
        onRemove={removeSpy}
        isEditable={isEditable}
      />
    )
  })

  it('renders control buttons', function () {
    expect(
      gistDetailsDisplay.find('.gist-details--control-buttons').length
    ).to.equal(1)
  })

  it('does not render control buttons if not editable', function () {
    const gistDetailsDisplay = shallow(
      <GistDetailsDisplay
        gist={gist}
        onEdit={editSpy}
        onRemove={removeSpy}
        isEditable={false}
      />
    )
    expect(
      gistDetailsDisplay.find('.gist-details--control-buttons').length
    ).to.equal(0)
  })

  it('calls onEdit callback', function () {
    gistDetailsDisplay
      .find('.gist-details--edit-button')
      .simulate('click')
    assert(editSpy.called)
  })

  it('calls onRemove callback', function () {
    gistDetailsDisplay
      .find('.gist-details--remove-button')
      .simulate('click')
    assert(removeSpy.called)
  })

})