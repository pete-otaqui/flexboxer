import React from 'react';


class VisualiserNode extends React.Component {
  mapProperties(properties) {
    let mKey, key, mapped = {};
    for ( key in properties ) {
      mKey = this.mapPropertyName(key);
      mapped[mKey] = properties[key];
    }
    return mapped;
  }
  mapPropertyName(propertyName) {
    return propertyName
      .split('-')
      .map(function(p, i) {
        if ( i === 0 ) return p;
        p = p.replace(/^./, function(s) { return s.toUpperCase(); });
      })
      .join('');
  }
  render() {
    let mapped = this.mapProperties(this.props.properties);
    return <div className={`visualiser-child ${this.props.selector}`} style={mapped}>
      {this.props.contents}
    </div>;
  }
}

class Visualiser extends React.Component {
  render() {
    let childNodes = [];
    let key, child;
    for ( key in this.props.children ) {
      child = this.props.children[key];
      childNodes.push(<VisualiserNode {...child} key={`child-${key}`} />);
    };
    console.log(childNodes);
    return <div>
      <h2>Visualiser</h2>
      <div className="visualiser-container">{childNodes}</div>
    </div>
  }
};

export default Visualiser;
