import React from 'react'

export default function ({gists, title, onClick}) {
  return (
    <span className="gist-group-label">
        <a
          className="gist-group-label--link"
          href="#"
          onClick={(e) => {
            e.preventDefault()
            onClick(gists)
          }}
        >
          {title}
        </a>
        <span className="gist-group-label--count">
          ({gists.length})
        </span>
      </span>
  )
}