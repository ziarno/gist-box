import React from 'react'
import {shallow} from 'enzyme'
import {chai} from 'meteor/practicalmeteor:chai'
import Label from '../Label'
import _ from 'underscore'
import {sinon} from 'meteor/practicalmeteor:sinon'

const {expect, assert} = chai

describe('Label', function () {
  const title = 'Label'
  const count = 2
  let onClick
  let onRemove

  beforeEach(function () {
    onClick = sinon.spy()
    onRemove = sinon.spy()
  })

  it('renders an \'a\' element if an onClick prop is provided', function () {
    const label = shallow(
      <Label
        onClick={onClick}
        label={title}
      />
    )
    expect(
      label.find('a.label--link').isEmpty()
    ).to.be.false
    expect(
      label.find('a.label--link').text()
    ).to.equal(title)
  })

  it('does not render an \'a\' element if an onClick prop is omitted', function () {
    const label = shallow(
      <Label
        label={title}
      />
    )
    expect(
      label.find('a.label--link').isEmpty()
    ).to.be.true
    expect(
      label.find('.label').text()
    ).to.equal(title)
  })

  it('calls onClick callback', function () {
    const label = shallow(
      <Label
        onClick={onClick}
        label={title}
      />
    )
    label.find('a.label--link').simulate('click')
    assert(onClick.called)
  })

  it('renders a count', function () {
    const label = shallow(
      <Label
        label={title}
        count={count}
      />
    )
    expect(
      label.find('.label--count').text()
    ).to.equal(`(${count})`)
  })

  it('renders a remove button if an onRemove prop is provided', function () {
    const label = shallow(
      <Label
        onRemove={onRemove}
        label={title}
      />
    )
    expect(
      label.find('.label--remove-button').isEmpty()
    ).to.be.false
  })

  it('does not render a remove button if an onRemove prop is omitted', function () {
    const label = shallow(
      <Label
        label={title}
      />
    )
    expect(
      label.find('.label--remove-button').isEmpty()
    ).to.be.true
  })

  it('calls onRemove callback', function () {
    const label = shallow(
      <Label
        onRemove={onRemove}
        label={title}
      />
    )
    label.find('.label--remove-button').simulate('click')
    assert(onRemove.called)
  })
})