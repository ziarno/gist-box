import React from 'react'
import Header from './Header'
import GistsManagerContainer from '../containers/GistsManagerContainer'

const propTypes = {
  user: React.PropTypes.object
}

class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        {this.props.user ? (
          <GistsManagerContainer />
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