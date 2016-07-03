import React from 'react'
import BlazeTemplate from './BlazeTemplate'
import Loader from './Loader'
import {Tracker} from 'meteor/tracker'
import {Session} from 'meteor/session'

class Header extends React.Component {

  constructor() {
    super()
    this.state = {
      loading: false
    }
  }

  componentDidMount() {
    this.computation = Tracker.autorun(() => {
      this.setState({
        loading: Session.get('loading')
      })
    })
  }

  componentWillUnmount() {
    this.computation.stop()
  }

  render() {
    return (
      <div className="header">
        <Loader
          visible={this.state.loading}
        />
        <BlazeTemplate
          id="login"
          template="loginButtons"
        />
        <h2>GistBox</h2>
      </div>
    )

  }
}

export default Header