import React from 'react'
import {Accounts} from 'meteor/accounts-base'

Accounts.ui.config({
  requestPermissions: {
    github: ['gist', 'user:email']
  }
})