import React from 'react';

class Header extends React.Component {
	render() {
		return (
			<header className="container mx-auto flex flex-row justify-between p-5">
				<img src={this.props.urlLogo} alt={this.props.altLogo} />
				<img src={this.props.urlMenu} alt="Menu" />
			</header>
		);
	}
}

export default Header;
