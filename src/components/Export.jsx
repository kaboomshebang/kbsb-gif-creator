import { useState } from 'react';

import Button from './Button';
import ExportModal from './ExportModal';
import ExportError from './ExportError';

import gifshot from 'gifshot';

const Export = (props) => {
	const [showExport, setShowExport] = useState(false);
	const [generating, setGenerating] = useState(false);
	const [errorNoImages, setErrorNoImages] = useState(false);
	const [errorNoSupport, setErrorNoSupport] = useState(false);
	const [image, setImage] = useState(null);

	const closeExport = () => {
		setShowExport(false);
	};

	const generate = () => {
		setGenerating(true);

		// get the URLs from the images array
		const images = props.images.map((e) => {
			return e[0];
		});

		// https://github.com/yahoo/gifshot#options
		const gifshotProps = {
			gifWidth: props.width,
			gifHeight: props.height,
			images: images,
			frameDuration: props.duration * 10, // The amount of time (10 = 1s) to stay on each frame
			sampleInterval: props.quality, // quality setting, lower is better quality // lowest is 1
			numWorkers: 6, // number of web workers for processing frames
			loop: 3,
		};

		if (gifshot.isExistingImagesGIFSupported()) {
			console.log('Browser supports all the gifshot options');
			console.log('Start process...');

			gifshot.createGIF(gifshotProps, (obj) => {
				if (!obj.error) {
					console.log('No error');

					setShowExport(true);
					setImage(obj.image);
					setGenerating(false);
				} else if (props.images.length === 0) {
					console.log('No images selected');

					setErrorNoImages(true);
				} else if (gifshot.isSupported()) {
					console.log('is');
				} else {
					console.log('Error');
				}
			});
		} else {
			console.log('Browser does NOT support all the gifshot options');

			setErrorNoSupport(true);
		}
	};

	return (
		<>
			<Button btnClick={generate} color="#C4CFBE">
				{generating ? '🦾 Generating...' : '🎬 Generate GIF'}
			</Button>
			{showExport && <ExportModal btnClick={closeExport} image={image}></ExportModal>}
			{errorNoImages && <ExportError error="❌ No images selected in step 1" />}
			{errorNoSupport && <ExportError error="❌ Your browser is not supported" />}
		</>
	);
};

export default Export;
