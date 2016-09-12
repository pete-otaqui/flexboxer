
/*
 * Setup JSDOM to allow node.js based react dom rendering
 */

import JSDOM from 'jsdom';
const jsdom = JSDOM.jsdom;
var exposedProperties = ['window', 'navigator', 'document'];
/* global global */
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

/* global require, __dirname */
import glob from 'glob';
glob.sync(`${__dirname}/src/js/**/*.test.js`).forEach((file) => {
  require(file);
});
