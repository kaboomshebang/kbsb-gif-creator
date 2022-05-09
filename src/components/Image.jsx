import React from 'react';

class Image extends React.Component {
	constructor(props) {
		super(props);
		this.state = { update: 0 };

		this.imgRef = React.createRef();
		this.moveImage = this.moveImage.bind(this);
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

	// moves an image to the right
	moveImage() {
		// .filter filesState so that a new array is returned
		const filesState = this.props.filesState.filter((el) => el);
		const imgToMove = filesState[this.props.index];
		const newPos = this.props.index + 1;

		if (newPos !== filesState.length) {
			// remove the image from the array
			filesState.splice(this.props.index, 1);
			// insert the image into the new position
			filesState.splice(newPos, 0, imgToMove);
		}

		// update the files state
		this.props.filesFunc(filesState);
	}

	removeImage() {
		this.setState({
			ratio: null,
		});
		console.log(this.props.index);

		console.log(this.props.filesState);

		const newFilesState = this.props.filesState.filter((el, i) => (i !== this.props.index ? el : null));
		this.props.filesFunc(newFilesState);

		console.log(this.props.index);
		console.log(newFilesState);
		//FIX the ratio state
		const newRatioState = this.props.ratioState.filter((el, i) => (i !== this.props.index ? el : null));
		console.log(newRatioState);

		this.props.ratioFunc(newRatioState);
	}

	render() {
		return (
			<figure className="relative flex flex-col items-center justify-between bg-gray-100">
				{this.props.alt !== 'Placeholder' ? (
					<div className="absolute top-0 w-full flex justify-between p-2">
						<button
							className="w-8 p-1 bg-gray-700/75 rounded-md font-bold text-white"
							onClick={this.moveImage}
						>
							{this.props.index + 1}
						</button>
						<button className="w-8 p-2 bg-gray-700/75 rounded-md" onClick={this.removeImage}>
							<img
								className="drop-shadow-md"
								src="https://assets.kbsb.app/svg/icon_cross_white.svg"
								alt="Cross"
							/>
						</button>
					</div>
				) : (
					''
				)}
				<img ref={this.imgRef} className="w-full h-60 object-cover" src={this.props.url} alt={this.props.alt} />
				<figcaption className="text-xs py-2 text-gray-400 text-center">
					<div className="font-bold">📷 {this.props.fileName}</div>

					{this.props.alt !== 'Placeholder' ? (
						<div className="mt-2">
							<div>
								width: {this.state.width}px
								<br />
								height: {this.state.height}px
							</div>
							<div>ratio: {this.state.ratio} : 1</div>
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
