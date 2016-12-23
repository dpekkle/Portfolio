import React from 'react';

var HelloWorld = React.createClass({
	handleClick: function() {
		console.log(this);
	},

	render: function() {
		return (
			<p className="helloStyle" onClick={this.handleClick}>
				Hello, {this.props.greetTarget}!
			</p>
		);
	}
});

export default HelloWorld;