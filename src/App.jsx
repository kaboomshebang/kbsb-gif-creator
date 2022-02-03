import { useState } from 'react';
// import logo from './logo.svg';
import './App.css';

import NavHeader from './components/NavHeader';
import Footer from './components/Footer';
import Title from './components/Title';

import StepSection from './components/StepSection';
import StepHeader from './components/StepHeader';
import StepNumber from './components/StepNumber';
import StepTitle from './components/StepTitle';
import StepDescription from './components/StepDescription';

import ImageSeq from './components/ImageSeq';
import Image from './components/Image';

// Globals
const logo = 'https://kbsb.app/assets/svg/kaboom_shebang_logo.svg';
const logoMenu = 'https://kbsb.app/assets/svg/icon_hamburger.svg';
const title = 'kbsb GIF Creator';
const subTitle = 'Create an animated GIF from still images';

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<NavHeader urlLogo={logo} altLogo="Kaboom Shebang" urlMenu={logoMenu} />
			<Title title={title} subTitle={subTitle}></Title>

			<header className="App-header">
				<button type="button" onClick={() => setCount((count) => count + 1)}>
					count is: {count}
				</button>
			</header>

			<StepSection>
				<StepHeader>
					<StepNumber number="2" color="#F0DBC7"></StepNumber>
					<StepTitle title="Check the image sequence"></StepTitle>
				</StepHeader>
				<ImageSeq>
					<Image
						url="https://kbsb.app/assets/images/image-placeholder-grey-400px.png"
						alt="Test image"
					></Image>
					<Image
						url="https://kbsb.app/assets/images/image-placeholder-grey-400px.png"
						alt="Test image"
					></Image>
					<Image
						url="https://kbsb.app/assets/images/image-placeholder-grey-400px.png"
						alt="Test image"
					></Image>
					<Image
						url="https://kbsb.app/assets/images/image-placeholder-grey-400px.png"
						alt="Test image"
					></Image>
				</ImageSeq>
				<StepDescription
					title="Enter the output size of the GIF animation"
					description="Default values are based on the input images"
				></StepDescription>
			</StepSection>

			<Footer />
		</div>
	);
}

export default App;
