import React from 'react';

class StepSection extends React.Component {
	render() {
		return <section className="container mx-auto px-5 py-10">{this.props.children}</section>;
	}
}

export default StepSection;
