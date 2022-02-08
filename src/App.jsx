import { useState } from 'react';
// import logo from './logo.svg';
// import './App.css';

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

// component props
const logo = 'https://kbsb.app/assets/svg/kaboom_shebang_logo.svg';
const logoMenu = 'https://kbsb.app/assets/svg/icon_hamburger.svg';
const title = 'kbsb GIF Creator';
const subTitle = 'Create an animated GIF from still images';
const placeholder = 'https://kbsb.app/assets/images/image-placeholder-grey-400px.png';

function App() {
	// global state for the files
	const [files, setFiles] = useState([]);
	// state for the image sequence
	const [size, setSize] = useState({
		width: 300,
		height: 300,
	});

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

			{/* output the list of files */}
			{console.log(files)}

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
				<ImageSize size="width" color="#F0DBC7"></ImageSize>
				<ImageSize size="height" color="#F0DBC7"></ImageSize>
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
				<Slider min="1" max="5" step="0.5" default="1.5" unit="seconds"></Slider>
				<StepDescription
					title="Image quality"
					description="A lower threshold value gives better quality results, but takes longer to generate (default: 2)."
				></StepDescription>
				<Slider min="1" max="5" step="1" default="2"></Slider>
			</StepSection>

			{/* Export sequence step */}
			<StepSection>
				<StepHeader>
					<StepNumber number="4" color="#C89E9E"></StepNumber>
					<StepTitle title="Export sequence to GIF"></StepTitle>
				</StepHeader>
				<StepDescription title="Loop" description="How many times should the animation loop."></StepDescription>
				<div className="flex row space-x-2">
					<Button label="Forever"></Button>
					<Button label="1 Loop"></Button>
					<Button label="2 Loops"></Button>
					<Button label="3 Loops"></Button>
				</div>
				<StepDescription
					title="Export"
					description="Done! Click export to start the process."
				></StepDescription>
				<Button label="🎬 Generate GIF" color="#C4CFBE"></Button>
			</StepSection>

			<Footer />
		</div>
	);
}

export default App;
