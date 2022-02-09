import React from 'react';

class ImageSize extends React.Component {
	constructor(props) {
		super(props);
		this.handleInput = this.handleInput.bind(this);
	}

	handleInput(e) {
		if (this.props.size === 'width') {
			// pass a new object to the setState function
			// passing a reference does not trigger a re-render
			this.props.sizeFunc({
				width: e.target.value,
				height: this.props.sizeState.height,
			});
		} else if (this.props.size === 'height') {
			this.props.sizeFunc({
				width: this.props.sizeState.width,
				height: e.target.value,
			});
		}
	}

	render() {
		const style = {
			backgroundColor: this.props.color,
		};

		return (
			<div className="py-2">
				<span className="inline-block w-16 text-left">{this.props.size}</span>
				<input
					style={style}
					type="number"
					className="w-20 bg-gray-200 p-2"
					min="0"
					max="9999"
					step="1"
					defaultValue="300"
					onChange={this.handleInput}
				/>
				<span className="pl-2">pixels</span>
			</div>
		);
	}
}

ImageSize.defaultProps = {
	size: 'size',
	color: '#eee',
};

export default ImageSize;
