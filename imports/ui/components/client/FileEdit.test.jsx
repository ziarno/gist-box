import React from 'react'
import {shallow} from 'enzyme'
import {chai} from 'meteor/practicalmeteor:chai'
import FileEdit from '../FileEdit'
import _ from 'underscore'
import {sinon} from 'meteor/practicalmeteor:sinon'

const {expect} = chai

describe('FileEdit', function () {
  const fileName = 'file1.txt'
  const content = 'Test content'
  let spy
  let fileEdit

  beforeEach(function () {
    spy = sinon.spy()
    fileEdit = shallow(
      <FileEdit
        fileName={fileName}
        content={content}
        onChange={spy}
      />
    )
  })

  it('renders fileName input', function () {
    expect(
      fileEdit.find('.file-edit--fileName').length
    ).to.equal(1)
  })

  it('renders content input', function () {
    expect(
      fileEdit.find('.file-edit--content').length
    ).to.equal(1)
  })

  it('fires onChange callback on user input', function () {
    fileEdit
      .find('.file-edit--fileName')
      .simulate('change', {target: {value: 'Test'}})
    fileEdit
      .find('.file-edit--content')
      .simulate('change', {target: {value: 'Test'}})

    assert(spy.calledTwice)

  })
})