import React from 'react';

class CssRule extends React.Component {
  render() {
    let propNodes = [];
    let prop, val;
    for ( prop in this.props.properties ) {
      val = this.props.properties[prop];
      propNodes.push(
        <div className="css-property" key={`prop-${prop}`}>
          <div className="css-property-property">
            {prop}:&nbsp;
          </div>
          <div className="css-property-value">
            {val};
          </div>
        </div>
      )
    }
    return <div className="css-rule">
      <div className="css-selector">
        {this.props.selector} {'{'}
      </div>
      <div className="css-properties">
        {propNodes}
      </div>
      {'}'}
    </div>;
  }
}

export default CssRule
