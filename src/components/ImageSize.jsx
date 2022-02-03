import React from 'react';

class ImageSize extends React.Component {
	render() {
		const style = {
			backgroundColor: this.props.color,
		};

		return (
			<div className="py-2">
				<span className="inline-block w-14 text-left">{this.props.size}</span>
				<input
					style={style}
					type="number"
					className="w-20 bg-gray-200 p-2"
					min="0"
					max="9999"
					step="1"
					defaultValue="300"
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
