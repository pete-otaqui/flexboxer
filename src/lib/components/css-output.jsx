import React from 'react';

class CssRule extends React.Component {
  render() {
    return <div className="css-rule">
      <div className="css-selector">
        {this.props.selector}
      </div>
    </div>;
  }
}

class CssOutput extends React.Component {
  render() {
    let ruleNodes = [];
    let key, rule;
    for (key in this.props.rules ) {
      rule = this.props.rules[key];
      ruleNodes.push(<CssRule {...rule} key={`rule-${key}`} />);
    };
    return <div>
      <h2>Css Output</h2>
      <div className="css-rules">{ruleNodes}</div>
    </div>;
  }
}

export default CssOutput
