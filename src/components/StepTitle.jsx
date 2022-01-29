import React from 'react';

class StepTitle extends React.Component {
	render() {
		return <h3 className="block w-full px-5 py-2 bg-gray-100 text-left">{this.props.title}</h3>;
	}
}

StepTitle.defaultProps = {
	title: 'title',
};

export default StepTitle;
