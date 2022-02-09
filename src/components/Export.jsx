import React from 'react';
import Button from './Button';
import ExportModal from './ExportModal';
import ExportError from './ExportError';

import '../lib/gifshot.min';

class Export extends React.Component {
	constructor(props) {
		super(props);
		this.generate = this.generate.bind(this);
		this.closeExport = this.closeExport.bind(this);

		this.state = { showExport: false };
	}

	closeExport() {
		this.setState({
			showExport: false,
		});
	}

	generate() {
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

		gifshot.createGIF(props, (obj) => {
			if (!obj.error) {
				console.log('No error');
				this.setState({ showExport: true, image: obj.image });
			} else if (this.props.images.length === 0) {
				console.log('No images selected');
				this.setState({ errorNoImages: true });
			} else {
				console.log('Error');
			}
		});
	}

	render() {
		return (
			<>
				<Button btnClick={this.generate} color="#C4CFBE">
					🎬 Generate GIF
				</Button>
				{this.state.showExport ? (
					<ExportModal btnClick={this.closeExport} image={this.state.image}></ExportModal>
				) : (
					''
				)}
				{this.state.errorNoImages ? <ExportError error="❌ No images selected in step 1" /> : ''}
			</>
		);
	}
}

export default Export;
