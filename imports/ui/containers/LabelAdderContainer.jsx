import React from 'react'
import {Meteor} from 'meteor/meteor'
import LabelAdder from '../components/LabelAdder'
import {createContainer} from 'meteor/react-meteor-data'
import Labels from '../../api/labels/Labels'

export default createContainer(function () {
  return {
    labels: Labels.find().fetch().map(l => l.label)
  }
}, LabelAdder)