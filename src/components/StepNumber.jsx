import React from 'react';

class StepId extends React.Component {
	render() {
		const style = {
			backgroundColor: this.props.color,
		};

		return (
			<span className="px-4 py-2 text-white" style={style}>
				{this.props.number}
			</span>
		);
	}
}

export default StepId;
