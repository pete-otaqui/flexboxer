/*
 * Setup store?
 */
import { createStore } from 'redux'

const store = createStore( function(state = {}) { return state; }, {});

/*
 * Setup JSDOM to allow node.js based react dom rendering
 */

import JSDOM from 'jsdom';
const jsdom = JSDOM.jsdom;
var exposedProperties = ['window', 'navigator', 'document'];
global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});
global.navigator = {
  userAgent: 'node.js'
};

/*
 * Manually require test index files,
 * since ES6 imports cannot be dynamic
 */

import './src/js/components/component-tests';
