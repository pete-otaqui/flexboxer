import React from 'react';

class InspectorProp extends React.Component {
  render() {
    return (
      <div className="inspector-prop">
        <div className="inspector-prop-name">
          <label>{this.props.name}</label>
        </div>
        <div className="inspector-prop-val">
          <select>
            <option>-- unset --</option>
            <option>flex</option>
          </select>
        </div>
      </div>
    );
  }
}

export default InspectorProp;
