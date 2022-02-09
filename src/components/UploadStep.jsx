import React from 'react';
import Button from './Button';
import StepNumber from './StepNumber';

import UploadModal from './UploadModal';

const color = '#77A5A5';

class UploadStep extends React.Component {
	constructor(props) {
		super(props);
		// bind this to the component
		this.toggleModal = this.toggleModal.bind(this);
		this.state = {
			showModal: false,
		};
	}

	toggleModal() {
		this.setState((prevState) => ({
			showModal: !prevState.showModal,
		}));
	}

	render() {
		return (
			<section className="container mx-auto px-5 py-10">
				<h1 className="text-2xl font-bold text-center">{this.props.title}</h1>
				<h2 className="text-gray-400 text-center">{this.props.subTitle}</h2>
				<div className="flex row justify-center space-x-2 p-5">
					<StepNumber color={color} number="1"></StepNumber>
					<Button btnClick={this.toggleModal}>Upload images</Button>
				</div>
				{this.state.showModal && <UploadModal btnClick={this.toggleModal} filesFunc={this.props.filesFunc} />}
			</section>
		);
	}
}

export default UploadStep;
