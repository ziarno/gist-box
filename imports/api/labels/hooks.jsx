import React from 'react'
import Labels from './Labels'
import Gists from '../gists/Gists'
import _ from 'underscore'
import {Meteor} from 'meteor/meteor'
import {onAfterUpdate, onAfterRemove} from './hooks-functions'

import 'meteor/matb33:collection-hooks'

Labels.after.update(onAfterUpdate)
Labels.after.remove(onAfterRemove)