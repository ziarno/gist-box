import React from 'react'
import {shallow} from 'enzyme'
import {chai} from 'meteor/practicalmeteor:chai'
import FileDisplay from '../FileDisplay'
import _ from 'underscore'

const {expect} = chai

describe('FileDisplay', function () {
  const fileName = 'file1.txt'
  const content = 'Test content'
  const fileDisplay = shallow(
    <FileDisplay
      fileName={fileName}
      content={content}
    />
  )

  it('renders fileName', function () {
    expect(
      fileDisplay.find('.file--fileName').text()
    ).to.equal(fileName)
  })

  it('renders content', function () {
    expect(
      fileDisplay.find('.file--content').text()
    ).to.equal(content)
  })

})