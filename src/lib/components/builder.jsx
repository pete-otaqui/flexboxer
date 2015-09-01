import React from 'react';
import BuilderButton from './builder-button.jsx!';
import BuilderActions from '../actions/builder-actions';

class Builder extends React.Component {
  onPressAdd() {
    BuilderActions.addRow();
    console.log('pressed add!');
  }
  onPressRemove() {
    console.log('pressed remove!');
  }
  render() {
    return <div className="builder">
      <h2>Builder</h2>
      <BuilderButton
        className="builder-button-remove"
        onPress={this.onPressRemove}
        contents="-"
      />
      <BuilderButton
        className="builder-button-add"
        onPress={this.onPressAdd}
        contents="+"
      />
    </div>;
  }
}

export default Builder;
