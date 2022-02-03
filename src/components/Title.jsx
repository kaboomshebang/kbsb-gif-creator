import React from 'react';
import Button from './Button';
import StepNumber from './StepNumber';

const button = 'Upload images';
const color = '#77A5A5';

class Title extends React.Component {
	render() {
		return (
			<div className="container mx-auto px-5 py-10">
				<h1 className="text-2xl font-bold text-center">{this.props.title}</h1>
				<h2 className="text-gray-400 text-center">{this.props.subTitle}</h2>
				<div className="flex row justify-center space-x-2 p-5">
					<StepNumber color={color} number="1"></StepNumber>
					<Button label={button}></Button>
				</div>
			</div>
		);
	}
}

export default Title;
