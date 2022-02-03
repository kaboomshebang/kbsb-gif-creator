import React from 'react';
import './Slider.css';

class Slider extends React.Component {
	render() {
		return (
			<div className="flex items-center">
				<input
					className="w-60"
					type="range"
					min={this.props.min}
					max={this.props.max}
					step={this.props.step}
					defaultValue={this.props.default}
				/>
				<span className="ml-5 mr-2 p-2 bg-gray-200">15</span>
				<span>{this.props.unit}</span>
			</div>
		);
	}
}

export default Slider;
