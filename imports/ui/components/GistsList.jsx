import React from 'react'

const propTypes = {

}

class GistsList extends React.Component {

  constructor() {
    super()

  }

  render() {
    return (
      <div className="gists-list column">
        <h3>Gists</h3>
      </div>
    )
  }

}

GistsList.propTypes = propTypes

export default GistsList