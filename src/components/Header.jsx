import React from 'react';

class Header extends React.Component {
	render() {
		return (
			<header>
				<img src={this.props.url} alt={this.props.alt} />
			</header>
		);
	}
}

export default Header;
