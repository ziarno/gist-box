import React from 'react'
import BlazeTemplate from './BlazeTemplate'

export default function () {
  return (
    <div className="header">
      <BlazeTemplate
        id="login"
        template="loginButtons"
      />
      <h2>GistBox</h2>
    </div>
  )
}