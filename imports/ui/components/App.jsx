import React from 'react'
import Header from './Header'
import GistsManagerContainer from '../containers/GistsManagerContainer'

const propTypes = {
  user: React.PropTypes.object,
  ready: React.PropTypes.bool
}

class App extends React.Component {

  render() {
    const {ready, user} = this.props

    return (
      <div>
        <Header />
        {ready ? (
          <GistsManagerContainer user={user} />
        ) : (
          <div className="app-message">
            <h3>Please login</h3>
          </div>
        )}
      </div>
    )
  }

}

App.propTypes = propTypes

export default App