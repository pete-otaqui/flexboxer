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
    var ruleNodes = this.props.rules.map((rule, index) => {
      return (<CssRule {...rule} key={`rule-${index}`} />);
    });
    return <div>
      <h2>Css Output</h2>
      <div className="css-rules">{ruleNodes}</div>
    </div>;
  }
}

export default CssOutput
