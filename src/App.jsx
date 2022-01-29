import { useState } from 'react';
// import logo from './logo.svg';
import './App.css';

import NavHeader from './components/NavHeader';
import Footer from './components/Footer';
import Title from './components/Title';

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

			<Footer />
		</div>
	);
}

export default App;
