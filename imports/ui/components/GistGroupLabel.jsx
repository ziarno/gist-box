import React from 'react'

export default function GistGroupLabel({count, title, onClick}) {
  return (
    <span className="gist-group-label">
        <a
          className="gist-group-label--link"
          href="#"
          onClick={onClick}
        >
          {title}
        </a>
        <span className="gist-group-label--count">
          ({count})
        </span>
      </span>
  )
}