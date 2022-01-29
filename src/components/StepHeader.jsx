import React from 'react';

class StepHeader extends React.Component {
	render() {
		return <header className="flex row items-center">{this.props.children}</header>;
	}
}

StepHeader.defaultProps = {
	title: 'Title',
};

export default StepHeader;
