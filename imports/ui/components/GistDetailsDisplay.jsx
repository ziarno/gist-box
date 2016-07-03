import React from 'react'
import GistBasicInfo from './GistBasicInfo'
import FileDisplay from './FileDisplay'
import _ from 'underscore'

export default function GistDetailsDisplay({gist, onEdit, onRemove, isEditable}) {
  return (
    <div className="gist-details--display">
      {isEditable ? (
        <div className="gist-details--control-buttons">
          <button
            className="gist-details--edit-button"
            onClick={onEdit}
          >
            Edit
          </button>
          <button
            className="gist-details--remove-button"
            onClick={onRemove}
          >
            Remove
          </button>
        </div>
      ) : null}
      <GistBasicInfo
        gist={gist}
      />
      {_.map(gist.files, ({content}, fileName) => (
        <FileDisplay
          key={fileName}
          fileName={fileName}
          content={content}
        />
      ))}
    </div>
  )
}