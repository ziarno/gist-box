import React from 'react'
import ReactDOM from 'react-dom'
import reactMixin from 'react-mixin'
import {ReactMeteorData} from 'meteor/react-meteor-data'

class BlazeTemplate extends React.Component {

  renderBlaze() {
    this.removeBlaze()
    Blaze.renderWithData(
      Template[this.props.template],
      _.omit(this.props, 'template'),
      ReactDOM.findDOMNode(this)
    )
  }

  removeBlaze() {
    if (this.view) {
      Blaze.remove(this.view)
    }
  }

  getMeteorData() {
    // Ensure a re-rendering of the template if a prop changes
    if (this.view) {
      this.renderBlaze()
    }
    return this.props
  }

  componentDidMount() {
    this.renderBlaze()
  }

  componentWillUnmount() {
    this.removeBlaze()
  }

  render() {
    return <div {...this.props} />
  }

}

reactMixin(BlazeTemplate.prototype, ReactMeteorData)

export default BlazeTemplate