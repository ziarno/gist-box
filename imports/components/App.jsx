import React from 'react'
import Header from './Header'
import GistsManager from './GistsManager'

const propTypes = {
  user: React.PropTypes.object
}

class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <GistsManager {...this.props} />
      </div>
    )
  }

}

App.propTypes = propTypes

export default App