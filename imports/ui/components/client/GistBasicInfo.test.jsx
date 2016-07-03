import React from 'react'
import {shallow} from 'enzyme'
import {chai} from 'meteor/practicalmeteor:chai'
import GistBasicInfo from '../GistBasicInfo'
import {gists} from '../../../mocks'
import _ from 'underscore'

const {expect} = chai

describe('GistBasicInfo', function () {
  const gist = gists[0]
  const gistBasicInfo = shallow(
    <GistBasicInfo
      gist={gist}
    />
  )

  it('renders description', function () {
    expect(
      gistBasicInfo.find('.gist-basic-info--description').text()
    ).to.equal(`Description: ${gist.description}`)
  })

  it('renders files count', function () {
    expect(
      gistBasicInfo.find('.gist-basic-info--files').text()
    ).to.equal(`Files: ${_.size(gist.files)}`)
  })

  it('renders public info', function () {
    expect(
      gistBasicInfo.find('.gist-basic-info--files').text()
    ).to.equal(`Files: ${_.size(gist.files)}`)
  })

})