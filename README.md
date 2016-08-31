FlexBoxer
=========

![Build status](https://travis-ci.org/pete-otaqui/flexboxer.svg?branch=redux)

## TODO

* ACTIONS SHOULD ACCEPT NODE IDs, NOT NODE OBJECTS
  * FLATTEN OUT PROPS IN <Tree> and <Node>
  * <Output> could use the unmapped lists of Nodes, couldn't it?
* Add and remove child nodes
  * Proper ID handling, not just hopeful
  * Should not remove root
  * Fix Navigation (leaving state cruft when changing!)
  * Button styling
  * Lots of other bugs with adding / removing / nav
* Move child nodes up/down amongst siblings
* Editable selector in `Inspector`
* Resizeable `Demo`
* Datalist support in `Inspector`
* Editable list of "layouts" / navigation
* Save with LocalStorage
* Fullscreen (full viewport) `Demo`
* Typeahead for both prop and value and `Inspector`
* Tidy up layout
* Look at implementing local state in `Property` while "invalid"
* Prettify html and css output
* Allow `id` as well as `className` in `selector`
* Write converter for `selector` => `id / className`
* Add "export to jsbin" (etc) feature
* Make sure a clean install of `redux` works well
* Make sure dependencies are correct across dev / prod
* Update rest of README to `redux`
* Write up

## Introduction

A flexbox layout builder.  Flexboxer is a visual tool for creating flexbox css
rules.

## Installing

You need a POSIX environment (Linux / OS X), NodeJS and NPM installed.  You can
get the latter by running:

Checkout the project, and run:

`npm install`

`npm start`

This will start a server at http://localhost:8080/ with a (WebPack) development
server with hot module reload enabled, react's development mode enabled, and
some redux middleware running.

## Building

This project uses simple `npm` commands for building, rather than a dedicated
tool like `gulp` or `grunt`.  The following scripts are available:

* `npm run build` - build the project into the `dist/` directory.
* `npm start` - serve the project from `src/` in dev mode.

## Running Tests

* `npm test` - lint the project, run the tests, generate code coverage.
* `babel-node tests.js` - just run the tests with native TAP output.

### Full `npm test` command

The full test command looks like this:

`eslint src *.js && BABEL_ENV=test nyc --reporter=lcov babel-node tests.js | faucet && nyc report`

Which is a mouthful.  Let's break it down.

The first part is `eslint src *.js`.  This lints both the `src/` directory and
any `*.js` files in the current directory.  The configuration for `eslint` is
stored in the `package.json` file.

The second command (after the `&&`), which runs only if the part is ok, runs
the tests.  Taking the most basic part, we have this:

`babel-node tests.js`, which executes `tests.js` using `babel-node`.

That outputs raw TAP which isn't pretty - so we pipe it into `faucet` which
makes things look nicer.  So now we have this:

`babel-node tests.js | faucet`

Let's think of that as the "ACTUAL_TEST_COMMAND"

We also get code coverage though, so we need to actually run `nyc` first and
pass the command above into it.  We want the `lcov` reporter, so we use that
argument.  Now we have this:

`nyc --reporter=lcov $ACTUAL_TEST_COMMAND`

We want to tell babel that we are running the tests, so we specify the
environment variable `BABEL_ENV` first though.

Finally, as well as the HTML output we get from the `lcov` reporter, it's also
nice to see an overview in the command line - so we add a third command after
another `&&` which dumps out such a table to the command line.


## Project Structure

The following libraries and tools are used in FlexBoxer:

* `react`
* `redux`
* `less` for styling
* `babel` for transpiling ES6 / JSX
* webpack
  * compiles styles
  * dev server
  * hmre
  * custom plugin functions to create the `dist` directory and hash the JS file
* `tape` for running tests
  * `enzyme` for react element rendering
  * `JSDOM` so that enzyme can run on node
  * `faucet` for formatting the tape output
* `istanbul` for code coverage
  * run by using the `nyc` command line part of istanbul
