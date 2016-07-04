import React from 'react'
import {shallow} from 'enzyme'
import {chai} from 'meteor/practicalmeteor:chai'
import LabelAdder from '../LabelAdder'
import _ from 'underscore'
import {sinon} from 'meteor/practicalmeteor:sinon'
import {Meteor} from 'meteor/meteor'
import {labels} from '../../../mocks'

const {expect, assert} = chai

describe('LabelAdder', function () {
  const gistId = 'gistId1'
  let labelAdder

  beforeEach(function () {
    sinon.stub(Meteor, 'call')
    labelAdder = shallow(
      <LabelAdder
        gistId={gistId}
        labels={labels.map(l => l.label)}
      />
    )
  })

  afterEach(function () {
    Meteor.call.restore()
  })

  it('renders a select input', function () {
    expect(
      labelAdder.find('select').isEmpty()
    ).to.be.false
  })

  it('renders select option elements', function () {
    expect(
      labelAdder.find('option').length
    ).to.equal(3)
  })

  it('calls the \'addLabelToGist\' method', function () {
    labelAdder
      .find('.label-adder--add-button')
      .simulate('click')
    assert(
      Meteor.call.calledWith(
        'addLabelToGist',
        {
          label: labels[0].label,
          gistId
        }
      )
    )
  })

})