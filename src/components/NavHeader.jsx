import { useState } from 'react';

import NavMenu from './NavMenu';

const Header = (props) => {
	const [showMenu, setShowMenu] = useState(false);

	const toggleMenu = () => {
		setShowMenu((prevState) => !prevState);
	};

	return (
		<header className="relative container mx-auto flex flex-row justify-between p-5">
			<a href={props.logoUrl}>
				<img className="w-40" src={props.logoIcon} alt={props.logoIconAlt} />
			</a>
			<button onClick={toggleMenu}>
				<img className="w-6" src={props.menuIcon} alt="Menu" />
			</button>
			{showMenu && <NavMenu />}
		</header>
	);
};

export default Header;
