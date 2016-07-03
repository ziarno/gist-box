import React from 'react'

export default function Loader({visible}) {
  return (
    <div
      className={classNames({
        'loader small progress': visible
      })}
    >
    </div>
  )
}