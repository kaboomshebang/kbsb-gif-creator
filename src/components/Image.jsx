import React from 'react';

class Image extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};

		this.imgRef = React.createRef();
		this.removeImage = this.removeImage.bind(this);
	}

	componentDidMount() {
		if (this.props.alt !== 'Placeholder') {
			this.imgRef.current.onload = () => {
				this.setState({
					width: this.imgRef.current.naturalWidth,
					height: this.imgRef.current.naturalHeight,
					ratio:
						Math.round((this.imgRef.current.naturalWidth / this.imgRef.current.naturalHeight) * 1000) /
						1000,
				});
				this.props.ratioFunc([...this.props.ratioState, this.state.ratio]);
			};
		}
	}

	removeImage() {
		this.setState({
			ratio: null,
		});
		const newFilesState = this.props.filesState.filter((el, i) => (i !== this.props.index ? el : null));
		this.props.filesFunc(newFilesState);
		const newRatioState = this.props.ratioState.filter((el, i) => (i !== this.props.index ? el : null));
		this.props.ratioFunc(newRatioState);
	}

	render() {
		return (
			<figure className="relative flex flex-col items-center justify-between bg-gray-100">
				{this.props.alt !== 'Placeholder' ? (
					<button className="absolute top-2 right-2 w-6 p-1 bg-black rounded-md" onClick={this.removeImage}>
						<img src="https://kbsb.app/assets/svg/icon_cross_white.svg" alt="Cross" />
					</button>
				) : (
					''
				)}
				<img ref={this.imgRef} className="max-h-60" src={this.props.url} alt={this.props.alt} />
				<figcaption className="text-xs py-2 text-gray-400 text-center">
					<div className="font-bold">{this.props.fileName}</div>

					{this.props.alt !== 'Placeholder' ? (
						<div className="mt-2">
							<div>
								Res: {this.state.width} x {this.state.height}
							</div>
							<div>Aspect: {this.state.ratio}</div>
						</div>
					) : (
						''
					)}
				</figcaption>
			</figure>
		);
	}
}

Image.defaultProps = {
	fileName: 'No images uploaded',
};

export default Image;
