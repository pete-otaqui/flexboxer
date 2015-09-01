// not sure why this doesn't work ...
// had to add this to the unmockedModulePathPatterns
// to make it work
// jest.dontMock('../hello.jsx');

import React from "react/addons";
import CssOutput from "../css-output.jsx";

var TestUtils = React.addons.TestUtils;

describe('CssOutput', () => {
  it('print a list of rules', () => {

    let rules = [
      {selector: '.one', properties: []},
      {selector: '.two', properties: []}
    ];

    // Render a checkbox with label in the document
    let cssOutput = TestUtils.renderIntoDocument(
      <CssOutput rules={rules} />
    );

    // Verify that it's Off by default
    let lis = TestUtils.scryRenderedDOMComponentsWithClass(cssOutput, 'css-selector');
    expect(lis.length).toEqual(2);

  });
});
