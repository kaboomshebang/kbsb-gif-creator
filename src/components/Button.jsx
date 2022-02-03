import React from 'react';

class Button extends React.Component {
	render() {
		const style = {
			backgroundColor: this.props.color,
		};

		return (
			<button style={style} className="text-base font-medium bg-gray-300 px-7 py-2">
				{this.props.label}
			</button>
		);
	}
}

export default Button;
