import React from 'react'
import Menu from './Menu'
import GistsList from './GistsList'
import GistDetails from './GistDetails'

const propTypes = {
  user: React.PropTypes.object
}

class GistsManager extends React.Component {

  render() {
    return (
      <div className="gists-manager">
        <Menu />
        <GistsList />
        <GistDetails />
      </div>
    )
  }

}

GistsManager.propTypes = propTypes

export default GistsManager