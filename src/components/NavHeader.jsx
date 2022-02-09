import React from 'react';

import NavMenu from './NavMenu';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.showMenu = this.showMenu.bind(this);

		this.state = {
			showMenu: false,
		};
	}

	showMenu() {
		console.log('test');
		this.setState({
			showMenu: !this.state.showMenu,
		});
	}

	render() {
		return (
			<header className="relative container mx-auto flex flex-row justify-between p-5">
				<a href={this.props.logoUrl}>
					<img className="w-40" src={this.props.logoIcon} alt={this.props.logoIconAlt} />
				</a>
				<button onClick={this.showMenu}>
					<img className="w-6" src={this.props.menuIcon} alt="Menu" />
				</button>
				{this.state.showMenu ? <NavMenu /> : ''}
			</header>
		);
	}
}

export default Header;
