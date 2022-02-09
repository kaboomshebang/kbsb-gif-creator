import React from 'react';

class Button extends React.Component {
	render() {
		const style = {
			backgroundColor: this.props.color,
		};

		return (
			<button
				id={this.props.id}
				style={style}
				className={`text-base font-medium bg-gray-300 px-7 py-2 ${
					this.props.active ? 'bg-gray-700 text-white' : ''
				}`}
				onClick={this.props.btnClick}
			>
				{this.props.children}
			</button>
		);
	}
}

export default Button;
