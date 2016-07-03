import React from 'react'
import {shallow} from 'enzyme'
import {chai} from 'meteor/practicalmeteor:chai'
import Loader from '../Loader'

const {assert} = chai

describe('Loader', function () {
  const loader = shallow(<Loader visible />)

  it('has correct classes when visible', function () {
    assert(loader.hasClass('loader'))
    assert(loader.hasClass('small'))
    assert(loader.hasClass('progress'))
  })

})