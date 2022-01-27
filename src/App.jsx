import { useState } from 'react';
// import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
	const logo = 'https://www.kaboomshebang.com/logos/kaboom_shebang_logo.svg';
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<Header url={logo} alt="Kaboom Shebang" />

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
