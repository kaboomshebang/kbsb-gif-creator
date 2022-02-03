import React from 'react';

class StepDescription extends React.Component {
	render() {
		return (
			<div className="pt-10 pb-5 text-left">
				<h4 className="font-medium">{this.props.title}</h4>
				<p className="text-sm text-gray-400">{this.props.description}</p>
			</div>
		);
	}
}

StepDescription.defaultProps = {
	title: 'Title',
	description: 'Description',
};

export default StepDescription;
