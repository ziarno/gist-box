import React from 'react'
import _ from 'underscore'

export default function ({gist, onClick}) {
  const {
    description,
    owner,
    files
    } = gist
  return (
    <div
      className="gist-list-item"
      onClick={onClick}
    >
      <img src={owner.avatar_url} />
      <div className="gist-list-item--info">
        <p>Description: {description}</p>
        <p>Files: {_.size(files)}</p>
        <p>{gist.public ? 'Public' : 'Private'}</p>
      </div>
    </div>
  )
}