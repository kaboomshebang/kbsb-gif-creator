import React from 'react';
import './Slider.css';

class Slider extends React.Component {
	constructor(props) {
		super(props);
		this.handleFunc = this.handleFunc.bind(this);
	}

	handleFunc(e) {
		this.props.valueFunc(e.target.value);
	}

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
					onChange={this.handleFunc}
				/>
				<span className="ml-5 mr-2 p-2 w-10 bg-gray-200 text-center">
					{this.props.valueState === undefined ? this.props.default : this.props.valueState}
				</span>
				<span>{this.props.unit}</span>
			</div>
		);
	}
}

export default Slider;
