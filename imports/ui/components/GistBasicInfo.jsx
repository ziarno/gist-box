import React from 'react'
import _ from 'underscore'

export default function GistBasicInfo({gist}) {
  const {description, files} = gist

  return (
    <div className="gist-basic-info">
      <p className="gist-basic-info--description">
        Description: {description}
      </p>
      <p className="gist-basic-info--files">
        Files: {_.size(files)}
      </p>
      <p className="gist-basic-info--public">
        {gist.public ? 'Public' : 'Private'}
      </p>
    </div>
  )
}