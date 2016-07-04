import React from 'react'
import {Meteor} from 'meteor/meteor'
import Labels from '../../api/labels/Labels'

const propTypes = {
  gistId: React.PropTypes.string.isRequired,
  labels: React.PropTypes.arrayOf(
    React.PropTypes.string
  ).isRequired
}

class LabelAdder extends React.Component {

  constructor({labels}) {
    super()
    this.state = {
      currentLabel: labels[0]
    }
    this.addLabel = this.addLabel.bind(this)
  }

  addLabel() {
    Meteor.call('addLabelToGist', {
      label: this.state.currentLabel,
      gistId: this.props.gistId
    })
  }

  componentWillReceiveProps({labels}) {
    if (!this.state.currentLabel && labels.length) {
      this.state.currentLabel = labels[0]
    }
  }

  render() {
    const {labels} = this.props
    const {currentLabel} = this.state

    return labels.length ? (
      <div className="label-adder">
        <select
          onChange={(e) => this.setState({
            currentLabel: e.target.value
          })}
          value={currentLabel}
        >
          {_.map(labels, label => (
            <option
              key={label}
              value={label}>
              {label}
            </option>
          ))}
        </select>
        <button
          className="label-adder--add-button"
          onClick={this.addLabel}
        >
          Add label
        </button>
      </div>
    ) : null
  }

}

LabelAdder.propTypes = propTypes

export default LabelAdder