import React from 'react'
import _ from 'underscore'

export default function Label({label, count, onClick, onRemove}) {
  const titleEl = onClick ? (
      <a
        className="label--link"
        href="#"
        onClick={onClick}
      >
        {label}
      </a>
    ) : label
  const countEl = _.isNumber(count) ?
    <span className="label--count">{`(${count})`}</span>
    : null
  const removeEl = onRemove ? (
    <button
      className="label--remove-button"
      onClick={onRemove}
    >
      x
    </button>
  ) : null

  return (
    <span className="label">
      {titleEl}
      {countEl}
      {removeEl}
    </span>
  )
}