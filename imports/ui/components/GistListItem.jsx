import React from 'react'
import _ from 'underscore'
import {classNames} from 'meteor/maxharris9:classnames'
import GistBasicInfo from './GistBasicInfo'

export default function GistListItem({gist, onClick, active}) {
  const {owner} = gist
  return (
    <div
      className={classNames('gist-list-item', {
        active
      })}
      onClick={() => onClick(gist)}
    >
      <img src={owner.avatar_url} />
      <GistBasicInfo
        gist={gist}
      />
    </div>
  )
}