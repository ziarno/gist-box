import React from 'react'
import Header from './Header'
import GistsManager from './GistsManager'

export default function App({ready}) {
  return (
    <div>
      <Header />
      {ready ? (
        <GistsManager />
      ) : (
        <div className="app-message">
          <h3>Please login</h3>
        </div>
      )}
    </div>
  )
}