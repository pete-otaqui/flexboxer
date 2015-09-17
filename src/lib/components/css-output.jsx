import React from 'react';

import CssRule from './css-rule.jsx!';

class CssOutput extends React.Component {
  render() {
    return <div>
      <h2>Css Output</h2>
      <div className="css-rules">{this.props.rules.map(function(rule) {
          return <CssRule {...rule} key={`rule-${rule.id}`} />;
        })}</div>
    </div>;
  }
}

export default CssOutput
