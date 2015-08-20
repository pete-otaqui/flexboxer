import React from 'react';
import ReactDom from 'react-dom';

import Hello from 'lib/hello.jsx!';

var root = document.querySelector('#root');

ReactDom.render(<Hello name="World" />, root);
