import React from 'react';
import Button from './Button';
import ExportModal from './ExportModal';
import ExportError from './ExportError';

import gifshot from 'gifshot';

class Export extends React.Component {
	constructor(props) {
		super(props);
		this.generate = this.generate.bind(this);
		this.closeExport = this.closeExport.bind(this);

		this.state = { showExport: false, generating: false };
	}

	closeExport() {
		this.setState({
			showExport: false,
		});
	}

	generate() {
		this.setState({
			generating: true,
		});

		// https://github.com/yahoo/gifshot#options
		const props = {
			gifWidth: this.props.width,
			gifHeight: this.props.height,
			images: this.props.images,
			frameDuration: this.props.duration * 10, // The amount of time (10 = 1s) to stay on each frame
			sampleInterval: this.props.quality, // quality setting, lower is better quality // lowest is 1
			numWorkers: 6, // number of web workers for processing frames
			loop: 3,
		};

		if (gifshot.isExistingImagesGIFSupported()) {
			console.log('Current browser supports all the gifshot options');
			console.log('Start process...');

			gifshot.createGIF(props, (obj) => {
				if (!obj.error) {
					console.log('No error');
					this.setState({ showExport: true, image: obj.image, generating: false });
				} else if (this.props.images.length === 0) {
					console.log('No images selected');
					this.setState({ errorNoImages: true });
				} else if (gifshot.isSupported()) {
					console.log('is');
				} else {
					console.log('Error');
				}
			});
		} else {
			console.log('Current browser does NOT support all the gifshot options');
			this.setState({ errorNoSupport: true });
		}
	}

	render() {
		return (
			<>
				<Button btnClick={this.generate} color="#C4CFBE">
					{this.state.generating ? '🦾 Generating...' : '🎬 Generate GIF'}
				</Button>
				{this.state.showExport ? (
					<ExportModal btnClick={this.closeExport} image={this.state.image}></ExportModal>
				) : (
					''
				)}
				{this.state.errorNoImages ? <ExportError error="❌ No images selected in step 1" /> : ''}
				{this.state.errorNoSupport ? <ExportError error="❌ Your browser is not supported" /> : ''}
			</>
		);
	}
}

export default Export;
