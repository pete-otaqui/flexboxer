import tape from 'tape';
import addAssertions from 'extend-tape';
import jsxEquals from 'tape-jsx-equals';
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';

import allTests from './test-files';

const test = addAssertions(tape, { jsxEquals });
const renderer = createRenderer();

allTests.forEach((testFn) => {
  testFn(test, renderer);
});
