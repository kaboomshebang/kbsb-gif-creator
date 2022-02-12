import { useState } from 'react';

import NavHeader from './components/NavHeader';
import Footer from './components/Footer';

import UploadStep from './components/UploadStep';

import Button from './components/Button';

import StepSection from './components/StepSection';
import StepHeader from './components/StepHeader';
import StepNumber from './components/StepNumber';
import StepTitle from './components/StepTitle';
import StepDescription from './components/StepDescription';

import ImageSeq from './components/ImageSeq';
import Image from './components/Image';
import ImageSize from './components/ImageSize';

import Slider from './components/Slider';
import Loops from './components/Loops';
import Export from './components/Export';

// component props
const logo = 'https://kbsb.app/assets/svg/kaboom_shebang_logo.svg';
const logoMenu = 'https://kbsb.app/assets/svg/icon_hamburger.svg';
const logoUrl = 'https://www.kaboomshebang.com';
const title = 'kbsb GIF Creator';
const subTitle = 'Create an animated GIF from still images';
const placeholder = 'https://kbsb.app/assets/images/image-placeholder-grey-400px.png';

function App() {
	// component states
	const [files, setFiles] = useState([]);
	const [size, setSize] = useState({ width: 1000, height: 1000 });
	const [duration, setDuration] = useState(2);
	const [quality, setQuality] = useState(4);
	const [loop, setLoop] = useState(0);
	const [ratios, setRatios] = useState([]);

	const Images = () => {
		if (files.length > 0) {
			return files.map((f, index) => (
				<Image
					key={`img_${index}`}
					index={index}
					url={f[0]}
					fileName={f[1]}
					alt="Uploaded"
					ratioState={ratios}
					ratioFunc={setRatios}
					filesState={files}
					filesFunc={setFiles}
				></Image>
			));
		} else {
			return <Image url={placeholder} alt="Placeholder"></Image>;
		}
	};

	// calculate the width of the image based on the avarage aspect ratio
	const DefWidth = () => {
		let counter = 0;

		for (let index = 0; index < files.length; index++) {
			counter++;
			if (files.length === ratios.length && counter === files.length) {
				const average = ratios.reduce((prev, curr) => (prev + curr) / 2);
				return Math.floor(1000 * average);
			}
		}
	};

	return (
		<div className="App">
			<NavHeader logoUrl={logoUrl} logoIcon={logo} logoIconAlt="Kaboom Shebang" menuIcon={logoMenu} />
			<UploadStep title={title} subTitle={subTitle} filesFunc={setFiles}></UploadStep>

			{/* image sequence step */}
			<StepSection>
				<StepHeader>
					<StepNumber number="2" color="#F0DBC7"></StepNumber>
					<StepTitle title="Check the image sequence"></StepTitle>
				</StepHeader>
				<StepDescription
					title="Uploaded images"
					description="Click on the image number to move the image to the right."
				></StepDescription>
				{/* place images */}
				<ImageSeq>{Images()}</ImageSeq>
				<StepDescription
					title="Enter the output size of the GIF animation"
					description="The width value is based on the average aspect ratio."
				></StepDescription>
				<ImageSize size="width" sizeFunc={setSize} sizeState={size} defValue={DefWidth()}></ImageSize>
				<ImageSize size="height" sizeFunc={setSize} sizeState={size} defValue={size.height}></ImageSize>
			</StepSection>

			{/* GIF/animation properties step */}
			<StepSection>
				<StepHeader>
					<StepNumber number="3" color="#727896"></StepNumber>
					<StepTitle title="GIF/animation properties"></StepTitle>
				</StepHeader>
				<StepDescription
					title="Frameduration"
					description="The amount of time (in sec.) to stay on a frame (min: 1s, max 5s)."
				></StepDescription>
				<Slider
					valueFunc={setDuration}
					valueState={duration}
					min="1"
					max="5"
					step="0.5"
					default="1.5"
					unit="seconds"
				></Slider>
				<StepDescription
					title="Image quality"
					description="A lower threshold value gives better quality results, but takes longer to generate (default: 4)."
				></StepDescription>
				<Slider valueFunc={setQuality} valueState={quality} min="1" max="5" step="1" default="4"></Slider>
			</StepSection>

			{/* Export sequence step */}
			<StepSection>
				<StepHeader>
					<StepNumber number="4" color="#C89E9E"></StepNumber>
					<StepTitle title="Export sequence to GIF"></StepTitle>
				</StepHeader>
				<StepDescription
					title="Loop"
					description="How many times should the animation loop. (Currently only possible to loop forever.)"
				></StepDescription>
				<Loops valueState={loop} loopFunc={setLoop}></Loops>
				<StepDescription
					title="Export"
					description="Done! Click generate to start the process."
				></StepDescription>

				<Export
					images={files}
					width={size.width}
					height={size.height}
					duration={duration}
					quality={quality}
				></Export>
			</StepSection>

			<Footer />
		</div>
	);
}

export default App;
