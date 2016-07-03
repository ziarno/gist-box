import React from 'react'
import {shallow} from 'enzyme'
import {chai} from 'meteor/practicalmeteor:chai'
import GistDetailsEdit from '../GistDetailsEdit'
import _ from 'underscore'
import {sinon} from 'meteor/practicalmeteor:sinon'
import {gists} from '../../../mocks'

const {expect} = chai

describe('GistDetailsEdit', function () {
  const gist = gists[0]
  const createNew = false
  let saveSpy
  let cancelSpy
  let removeSpy
  let gistDetailsEdit

  beforeEach(function () {
    saveSpy = sinon.spy()
    removeSpy = sinon.spy()
    cancelSpy = sinon.spy()
    gistDetailsEdit = shallow(
      <GistDetailsEdit
        gist={gist}
        onSave={saveSpy}
        onRemove={removeSpy}
        onCancel={cancelSpy}
        createNew={createNew}
      />
    )
  })

  it('sets initial state', function () {
    expect(
      gistDetailsEdit.instance().state
    ).to.deep.equal({
      description: gist.description,
      public: gist.public,
      files: [
        {fileName: 'file1.txt', content: 'file1 content'},
        {fileName: 'file2.txt', content: 'file2 content'}
      ]
    })
  })

  it('renders edit buttons', function () {
    expect(
      gistDetailsEdit.find('.gist-details--edit-buttons').length
    ).to.equal(1)
  })

  it('does not render public control input if editing an existing gist', function () {
    expect(
      gistDetailsEdit.find('.gist-details--edit-public').length
    ).to.equal(0)
  })

  it('renders public control input only if creating new gist', function () {
    const gistDetailsEdit = shallow(
      <GistDetailsEdit
        gist={gist}
        onSave={saveSpy}
        onRemove={removeSpy}
        onCancel={cancelSpy}
        createNew={true}
      />
    )
    expect(
      gistDetailsEdit.find('.gist-details--edit-public').length
    ).to.equal(1)
  })

  it('calls onCancel callback', function () {
    gistDetailsEdit
      .find('.gist-details--cancel-button')
      .simulate('click')
    expect(cancelSpy.called)
  })

  it('calls onSave callback', function () {
    gistDetailsEdit
      .find('.gist-details--save-button')
      .simulate('click')
    expect(saveSpy.called)
  })

  it('calls onRemove callback', function () {
    gistDetailsEdit
      .find('.gist-details--remove-button')
      .simulate('click')
    expect(removeSpy.called)
  })

  describe('sets public state', function () {
    const gistDetailsEdit = shallow(
      <GistDetailsEdit
        gist={gist}
        onSave={saveSpy}
        onRemove={removeSpy}
        onCancel={cancelSpy}
        createNew={true}
      />
    )

    it('to true', function () {
      gistDetailsEdit
        .find('#public')
        .simulate('change', {target: {value: 'public'}})
      expect(
        gistDetailsEdit.instance().state.public
      ).to.equal(true)
    })

    it('to false', function () {
      gistDetailsEdit
        .find('#private')
        .simulate('change', {target: {value: 'private'}})
      expect(
        gistDetailsEdit.instance().state.public
      ).to.equal(false)
    })
  })

  it('sets description on input change', function () {
    const testDescription = 'Test description'
    gistDetailsEdit
      .find('.gist-details--edit-description')
      .simulate('change', {target: {value: testDescription}})
    expect(
      gistDetailsEdit.instance().state.description
    ).to.equal(testDescription)
  })

  it('adds and empty file', function () {
    gistDetailsEdit
      .find('.gist-details--add-file')
      .simulate('click')
    expect(
      gistDetailsEdit.instance().state.files.length
    ).to.equal(3)
  })

})