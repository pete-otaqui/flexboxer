// not sure why this doesn't work ...
// had to add this to the unmockedModulePathPatterns
// to make it work
// jest.dontMock('../hello.jsx');

import React from "react/addons";
import Hello from "../hello.jsx";

describe('Hello', () => {
  it('should say hello', () => {
    let TestUtils = React.addons.TestUtils;

    // Render a checkbox with label in the document
    let hello = TestUtils.renderIntoDocument(
      <Hello name="World" />
    );

    // Verify that it's Off by default
    let p = TestUtils.findRenderedDOMComponentWithTag(hello, 'p');
    expect(p.getDOMNode().textContent).toEqual('Hello World');

  });
});
