import React from 'react'
import Header from './Header'

const propTypes = {
  user: React.PropTypes.object
}

class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
      </div>
    )
  }

}

App.propTypes = propTypes

export default App