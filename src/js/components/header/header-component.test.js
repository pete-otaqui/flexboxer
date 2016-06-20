import React from 'react';

import Header from './header-component';

export default function(test, renderer) {
  test('Is a header', (assert) => {
    assert.plan(1);

    renderer.render(<Header />);

    const message = 'Should be a header';
    const expected =
      <header className="header">
        <div className="container">
          <h1>
            FlexBoxer
          </h1>
        </div>
      </header>;
    const output = renderer.getRenderOutput();

    assert.jsxEquals(output, expected, message);
  });
}
