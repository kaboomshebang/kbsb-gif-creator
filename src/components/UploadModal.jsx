import React from 'react';

class UploadModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
			drag: false,
		};

		this.dragImageEnter = this.dragImageEnter.bind(this);
		this.dragImageOver = this.dragImageOver.bind(this);
		this.dropImage = this.dropImage.bind(this);
		this.dragLeave = this.dragLeave.bind(this);

		this.selectedImage = this.selectedImage.bind(this);
	}

	componentDidMount() {
		// delay the state change for the opacity transition
		setTimeout(() => {
			this.setState({
				showModal: true,
			});
		}, 100);
	}

	dragImageEnter(e) {
		e.preventDefault();
		this.setState({
			drag: true,
		});
	}

	dragImageOver(e) {
		e.preventDefault();
	}

	dragLeave(e) {
		e.preventDefault();
		this.setState({
			drag: false,
		});
	}

	dropImage(e) {
		e.preventDefault();
		this.setState({
			drag: false,
		});

		// store the uploaded items
		let fileNames = [];
		let files = [];

		for (const i of e.dataTransfer.files) {
			fileNames = [...fileNames, i.name];
			files = [...files, [URL.createObjectURL(i), i.name]];
		}
		this.props.filesFunc(files);
		this.saveFileNames(fileNames);
	}

	selectedImage(e) {
		let fileNames = [];
		let files = [];

		for (const i of e.target.files) {
			fileNames = [...fileNames, i.name];
			files = [...files, [URL.createObjectURL(i), i.name]];
		}
		this.props.filesFunc(files);
		this.saveFileNames(fileNames);
	}

	saveFileNames(fileNames) {
		this.setState({
			uploadedImages: fileNames,
			showUploads: true,
		});
	}

	render() {
		const styles = {
			transition: 'opacity 1000ms',
			opacity: this.state.showModal ? 1 : 0,
		};

		return (
			<>
				<section
					style={styles}
					className="z-10 fixed inset-0 sm:inset-auto sm:right-1/2 sm:top-10 sm:translate-x-1/2 sm:bottom-5 w-full h-full sm:w-96 sm:h-3/4 bg-white drop-shadow-xl"
				>
					<header className="flex justify-between bg-black p-2">
						<span className="flex items-center">
							<img src="https://assets.kbsb.app/svg/shebang_grey_small.svg" alt="Shebang" />
							<span className="text-white text-center font-medium ml-2">Upload images</span>
						</span>
						<button onClick={this.props.btnClick}>
							<img src="https://assets.kbsb.app/svg/icon_cross_white.svg" alt="Cross" />
						</button>
					</header>
					<article className="flex flex-col items-center h-full p-5">
						<div
							id="drop-zone"
							onDragEnter={this.dragImageEnter}
							onDragOver={this.dragImageOver}
							onDrop={this.dropImage}
							onDragLeave={this.dragLeave}
							onDragExit={this.dragLeave}
							onDragEnd={this.dragLeave}
							className={`flex justify-center items-center bg-gray-300 w-full ${
								this.state.drag ? 'border-4' : 'border-2'
							} border-dashed border-gray-600 p-6 h-[calc(50%_-_1.5rem)]`}
						>
							<div className="pointer-events-none flex flex-col items-center">
								<img
									className={`pointer-events-none w-14 ${this.state.drag ? 'animate-bounce' : ''}`}
									src="https://assets.kbsb.app/svg/icon_arrow_down_grey.svg"
									alt="Arrow"
								/>
								<span className="pointer-events-none text-xl text-white text-center font-normal mt-4">
									Drag-and-drop files
								</span>
							</div>
						</div>
						<div className="flex justify-center items-center bg-gray-100 w-full p-6 h-[calc(50%_-_1.5rem)]">
							<label className="cursor-pointer" htmlFor="files">
								<div className="flex flex-col items-center">
									<img
										className="w-14"
										src="https://assets.kbsb.app/svg/icon_file_upload_black.svg"
										alt="File"
									/>
									<div>
										<p className="text-xl text-black font-medium mt-4">Select files to upload</p>
										<input
											onChange={this.selectedImage}
											className="text-xl text-black font-medium mt-4"
											type="file"
											id="files"
											name="files"
											accept="image/png, image/jpeg"
											multiple
											style={{ display: 'none' }}
										></input>
									</div>
								</div>
							</label>
						</div>
					</article>
					{this.state.showUploads ? (
						<div className="absolute bottom-6 right-5 p-6 bg-white border-2 border-green-700 shadow-lg">
							<ul>
								{this.state.uploadedImages.map((name, index) => (
									<li key={index}>✔ {name}</li>
								))}
							</ul>
						</div>
					) : (
						''
					)}
				</section>
			</>
		);
	}
}

export default UploadModal;
