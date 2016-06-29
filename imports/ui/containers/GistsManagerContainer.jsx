import React from 'react'
import GistsManager from '../components/GistsManager'
import {createContainer} from 'meteor/react-meteor-data'
import Gists from '../../api/gists/Gists'

export default createContainer(function () {
  return {
    gists: Gists.find().fetch()
  }
}, GistsManager)