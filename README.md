GistBox
-------
A simple app to manage github gists.

Running the app
---------------

Application is available at [http://gistbox.herokuapp.com](http://gistbox.herokuapp.com).
To run the app locally:
1. [Install Meteor](https://www.meteor.com/install).
2. Clone this repository `git clone https://github.com/ziarno7/GistBox.git`
3. Navigate to the `GistBox`dir
4. Run `run npm install`
5. Run `meteor`

Note: Github OAuth credentials are stored in MongoDB, so you will need to configure it to be able to login (follow instructions in the app).

The stack
---------
Libraries and frameworks used:

- Meteor
- React
- Less
- Underscore

Application directory structure is based on [Meteor Guide](https://guide.meteor.com/structure.html#example-app-structure)

Tests
------------
Libraries and frameworks used:
- Mocha
- Chai
- Enzyme
- Sinon

Running tests:

`meteor test --driver-package practicalmeteor:mocha --port 3100`

Notes
-----

Switching the status of a users gist between public and private is no longer available in github API v3.