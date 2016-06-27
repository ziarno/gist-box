import React from 'react'
import BlazeTemplate from './BlazeTemplate'

export default class Header extends React.Component {

  render() {
    return (
      <div className="header">
        <h2>GistBox</h2>
        <BlazeTemplate
          id="login"
          template="loginButtons"
        />
      </div>
    )
  }

}