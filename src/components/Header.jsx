import React from 'react';

class Header extends React.Component {
	render() {
		return (
			<header className="container mx-auto flex flex-row justify-between">
				<img src={this.props.url} alt={this.props.alt} />
				<span>X</span>
			</header>
		);
	}
}

export default Header;
