import React from 'react'
import HelloWorld from './HelloWorld'
import {shallow} from 'enzyme'
import {chai} from 'meteor/practicalmeteor:chai'

describe('HelloWorld', function () {
  it('should render', function () {
    const helloWorld = shallow(<HelloWorld />)
    chai.assert(helloWorld.text() === 'Hello World!')
  })
})