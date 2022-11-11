import { useState } from 'react';

import Button from './Button';
import StepNumber from './StepNumber';

import UploadModal from './UploadModal';

const UploadStep = (props) => {
	const [showModal, setShowModal] = useState(false);

	const color = '#77A5A5';

	const toggleModal = () => {
		setShowModal((prevState) => !prevState);
	};

	return (
		<section className="container mx-auto px-5 py-10">
			<h1 className="text-2xl font-bold text-center">{props.title}</h1>
			<h2 className="text-gray-400 text-center">{props.subTitle}</h2>
			<div className="flex row justify-center space-x-2 p-5">
				<StepNumber color={color} number="1"></StepNumber>
				<Button btnClick={toggleModal}>Upload images</Button>
			</div>
			{showModal && <UploadModal btnClick={toggleModal} filesFunc={props.filesFunc} />}
		</section>
	);
};

export default UploadStep;
