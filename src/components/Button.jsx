import React from 'react';

class Button extends React.Component {
	render() {
		return <button className="text-base font-medium bg-gray-300 px-7 py-2">{this.props.label}</button>;
	}
}

export default Button;
