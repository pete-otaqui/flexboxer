import React from 'react';

class InspectorValueSelect extends React.Component {
  render() {
    console.log(this.props);
    return <input value={this.props.value} />;
  }
}

export default InspectorValueSelect;
