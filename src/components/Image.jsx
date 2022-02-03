import React from 'react';

class Image extends React.Component {
	render() {
		return (
			<figure>
				<img className="max-h-60" src={this.props.url} alt={this.props.alt} />
				<figcaption className="text-xs pt-2 text-gray-400">
					<span className="block">{this.props.file}</span>
					<span className="block">{this.props.res}</span>
				</figcaption>
			</figure>
		);
	}
}

Image.defaultProps = {
	file: 'imageName.ext',
	res: '1200 x 800px',
};

export default Image;
