import React from 'react'
import Gists from './Gists'
import {onAfterInsert} from './hooks-functions'

import 'meteor/matb33:collection-hooks'

Gists.after.insert(onAfterInsert)