FlexBoxer
=========

## TODO

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
* `npm test` - lint the project and run the tests.
