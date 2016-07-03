import React from 'react'

export const gists = [
  {
    id: 'gist1',
    description: 'Test gist description 1',
    public: false,
    files: {
      'file1.txt': {
        content: 'file1 content'
      },
      'file2.txt': {
        content: 'file2 content'
      }
    },
    owner: {
      id: 'testGithubUserId',
      avatar_url: 'testUrl1'
    }
  },
  {
    id: 'gist2',
    description: 'Test gist description 2',
    public: true,
    files: {
      'file1.txt': {
        content: 'file1 content'
      },
      'file2.txt': {
        content: 'file2 content'
      }
    },
    owner: {
      id: 'testGithubUserId',
      avatar_url: 'testUrl2'
    }
  },
  {
    id: 'gist3',
    description: 'Test gist description 3',
    public: false,
    files: {
      'file1.txt': {
        content: 'file1 content'
      },
      'file2.txt': {
        content: 'file2 content'
      }
    },
    owner: {
      id: 'gist3',
      avatar_url: 'testUrl3'
    }
  }
]

export const user = {
  _id: 'testUserId',
  services: {
    github: {
      id: 'testGithubUserId'
    }
  }
}