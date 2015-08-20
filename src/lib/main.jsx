import React from 'react';
import ReactDom from 'react-dom';

import Hello from 'lib/hello.jsx!';
import CssOutput from 'lib/css-output.jsx!';

var root = document.querySelector('#root');

let rules = [
  {selector: '.one', properties: []},
  {selector: '.two', properties: []},
  {selector: '.three', properties: []}
];

ReactDom.render(<div><Hello name="World" /><CssOutput rules={rules} /></div>, root);
