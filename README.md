FlexBoxer
=========

## TODO

* Tests for `Demo`
* Tests for `Node`
* Make `Tree` a child of `Inspector`
* Add props editor to `Inspector`
  * Typeahead for both prop and value
* Proper `key` handling for both `Tree` and `Demo`
* Write converter for `selector` => `id / className`
* Add "export to jsbin" (etc) feature
* Make sure a clean install of `redux` works well
* Make sure dependencies are correct across dev / prod
* Create a `dist` package for deployment
* Update rest of README to `redux`
* Write up

## Introduction

A flexbox layout builder.  Flexboxer is a visual tool for creating flexbox css rules.

## Installing

You need a POSIX environment (Linux / OS X), NodeJS, NPM and [JSPM](https://jspm.io) installed.  You can get the latter by running:

`npm install -g jspm`

Checkout the project, and run:

`npm install`

`jspm install`

## Building

This project uses simple `npm` commands for building, rather than a dedicated tool like `gulp` or `grunt`.  The following scripts are available:


* `npm run build` - build the project into the `dist/` directory.
* `npm run serve` - serve the project from `src/`.
* `npm run serve-dist` - serve the projet from `dist/`

The `npm run build` command is actually running all these, in the following order:

* `npm run bundle` - create an SFX bundle with JSPM, in dist/
* `npm run uglify` - compress `dist/build.js` into `dist/build.min.js`
* `npm run html-dist` - copy `index.html` from `src/` to `dist` and replace the script tags for release
* `npm run styles` - copy the stylesheet from `src/styles` to `dist/styles`


## TODO, v1.1

* Improve defaults for new layout items:
* random colour bg;
* magic incrementing selector
* Hover highlighting in Tree / Visualiser.
* Export to JSBin / JSFiddle / etc.
* Tests >:-S

## TODO, v2.0

* Drag and drop tree?
* Better input controls, with dev-tools like autopopulation and keyboard shortcuts
* Internal save (as opposed to only exporting to third parties)
* Output as less / scss as well as CSS
