import React from 'react';
import ReactDom from 'react-dom';

import FlexBoxerApp from 'lib/components/flexboxer-app.jsx!';

// var myLayout = layoutModel.createNewLayout();

var root = document.querySelector('#fb-root');

let rules = [
  {selector: '.one', properties: []},
  {selector: '.two', properties: []},
  {selector: '.three', properties: []}
];

ReactDom.render(<FlexBoxerApp />, root);
