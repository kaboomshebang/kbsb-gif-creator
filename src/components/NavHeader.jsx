import React from 'react';

class Header extends React.Component {
	render() {
		return (
			<header className="container mx-auto flex flex-row justify-between p-5">
				<img className="w-40" src={this.props.urlLogo} alt={this.props.altLogo} />
				<img className="w-6" src={this.props.urlMenu} alt="Menu" />
			</header>
		);
	}
}

export default Header;
