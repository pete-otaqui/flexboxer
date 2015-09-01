import React from 'react';

let ReactPropTypes = React.PropTypes;

class BuilderButton extends React.Component {
  constructor() {
    super();
    this._onClick = this._onClick.bind(this);
  }
  render() {
    return <button
      className="builder-button"
      onClick={this._onClick}>
        {this.props.contents}
    </button>;
  }
  _onClick(event) {
    this.props.onPress();
  }
};

BuilderButton.propTypes = {
  onPress: ReactPropTypes.func.isRequired,
  contents: ReactPropTypes.string
};

export default BuilderButton;
