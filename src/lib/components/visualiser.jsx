import React from 'react';


class VisualiserNode extends React.Component {
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

class Visualiser extends React.Component {
  render() {
    let ruleNodes = [];
    let key, rule;
    for ( key in this.props.rules ) {
      rule = this.props.rules[key];
      ruleNodes.push(<VisualiserNode {...rule} key={`rule-${key}`} />);
    };
    return <div>
      <h2>Visualiser</h2>
      <div className="visualiser-rules">{ruleNodes}</div>
    </div>
  }
};

export default Visualiser;
