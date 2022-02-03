import React from 'react';

class ImageSeq extends React.Component {
	render() {
		return (
			<div id="image-container" className="grid grid-cols-2 md:grid-cols-4 gap-2">
				{this.props.children}
			</div>
		);
	}
}

export default ImageSeq;
