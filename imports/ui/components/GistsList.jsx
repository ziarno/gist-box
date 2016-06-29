import React from 'react'
import GistListItem from './GistListItem'

export default function ({gists, onShowGist}) {
  return (
    <div className="gists-list column">
      <h3>Gists</h3>
      {gists.map(gist => (
        <GistListItem
          key={gist._id}
          gist={gist}
          onClick={() => onShowGist(gist)}
        />
      ))}
    </div>
  )
}