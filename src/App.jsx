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

// component props
const logo = 'https://kbsb.app/assets/svg/kaboom_shebang_logo.svg';
const logoMenu = 'https://kbsb.app/assets/svg/icon_hamburger.svg';
const title = 'kbsb GIF Creator';
const subTitle = 'Create an animated GIF from still images';
const placeholder = 'https://kbsb.app/assets/images/image-placeholder-grey-400px.png';

function App() {
	// component states
	const [files, setFiles] = useState([]);
	const [size, setSize] = useState({ width: 1000, height: 1000 });
	const [duration, setDuration] = useState(2);
	const [quality, setQuality] = useState(2);
	const [loop, setLoop] = useState(0);

	const Images = () => {
		if (files.length > 0) {
			return files.map((f, index) => <Image key={`img_${index}`} url={f} alt="Test image"></Image>);
		} else {
			return <Image url={placeholder} alt="Test image"></Image>;
		}
	};

	return (
		<div className="App">
			<NavHeader urlLogo={logo} altLogo="Kaboom Shebang" urlMenu={logoMenu} />
			<UploadStep title={title} subTitle={subTitle} filesFunc={setFiles}></UploadStep>

			{/* image sequence step */}
			<StepSection>
				<StepHeader>
					<StepNumber number="2" color="#F0DBC7"></StepNumber>
					<StepTitle title="Check the image sequence"></StepTitle>
				</StepHeader>
				<StepDescription
					title="Uploaded images"
					description="Drag and drop to change the order"
				></StepDescription>
				{/* place images */}
				<ImageSeq>{Images()}</ImageSeq>
				<StepDescription
					title="Enter the output size of the GIF animation"
					description="Default values are based on the input images"
				></StepDescription>
				<ImageSize size="width" sizeFunc={setSize} sizeState={size}></ImageSize>
				<ImageSize size="height" sizeFunc={setSize} sizeState={size}></ImageSize>
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
					description="A lower threshold value gives better quality results, but takes longer to generate (default: 2)."
				></StepDescription>
				<Slider valueFunc={setQuality} valueState={quality} min="1" max="5" step="1" default="2"></Slider>
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
				<Button label="" color="#C4CFBE">
					🎬 Generate GIF
				</Button>
			</StepSection>

			<Footer />
		</div>
	);
}

export default App;
