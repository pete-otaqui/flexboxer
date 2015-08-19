
var React = require('react');
var ReactDom = require('react-dom');

var HelloMessage = React.createClass({
  render: function() {
    return <div>Hello {this.props.name}</div>
  }
});

var root = document.querySelector('#root');

ReactDom.render(<HelloMessage name="World" />, root);
