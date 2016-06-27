import React from 'react'
import {mount} from 'enzyme'
import {chai} from 'meteor/practicalmeteor:chai'
import BlazeTemplate from '../BlazeTemplate'

import './BlazeTemplate.test.html'

describe('BlazeTemplate', function () {
  const template = mount(
    <BlazeTemplate
      className="class-blaze-template-test"
      template="template-test"
    />
  )

  it('renders a blaze template using react', function () {
    chai.expect(template.html()).to.equal(
      `<div class="class-blaze-template-test"><div id="template-test">
    <p class="test-class">Test</p>
  </div></div>`
    )
  })

})