GistBox
-------
A simple app to manage github gists.
Note: styling was *not* the focus of this task, therefore it was kept to a bare minimum.

Running the app
---------------

Application is available at [http://gistbox.herokuapp.com](http://gistbox.herokuapp.com).
To run the app locally:
1. [Install Meteor](https://www.meteor.com/install).
2. Clone this repository `git clone https://github.com/ziarno7/GistBox.git`
3. Navigate to the `GistBox`dir
4. Run `run npm install`
5. Run `meteor`

Note: Github OAuth credentials are stored in MongoDB,
so you will need to configure it to be able to login
(follow instructions in the app).

The design
---------
Libraries and frameworks used:

- Meteor
- React
- Less
- MongoDB
- Underscore

Application directory structure is based on [Meteor Guide](https://guide.meteor.com/structure.html#example-app-structure)

Application state is managed by Meteor's collections and
Session. These are 'reactive' data sources, which Meteor
uses in its reactive computations
([read more](https://www.discovermeteor.com/blog/reactivity-basics-meteors-magic-demystified/)
 about Meteor's reactivity).

Github api calls are initiated by the client via Meteor methods to the server,
which makes the actual call to the github api and passes the response
back to the client.
Gists state is managed by the client-only collection 'Gists'.

Labels are stored in MongoDB in the collection 'labels'. Client manages
them using Meteor methods. Thanks to this, Meteor's optimistic UI functionality
works, and the user does not have to wait for the server's response to manage labels
(this is not the case with Gists, since we are not storing them in MongoDB)

Tests
------------
Libraries and frameworks used:
- Mocha
- Chai
- Enzyme
- Sinon

What has been tested:
- React components
- Meteor methods
- Meteor Collection hooks
- github connectivity methods

Running tests:

`meteor test --driver-package practicalmeteor:mocha --port 3100`

Notes
-----

Switching the status of a users gist between public and private is no longer available in github API v3.