import React from 'react';

export default class Hello extends React.Component {
	render() {
		return <div><p>Hello {this.props.name}</p></div>;
	}
}
