import './Slider.css';

const Slider = (props) => {
	const handleFunc = (e) => {
		props.valueFunc(e.target.valueAsNumber);
	};

	return (
		<div className="flex items-center">
			<input
				className="w-60"
				type="range"
				min={props.min}
				max={props.max}
				step={props.step}
				defaultValue={props.default}
				onChange={handleFunc}
			/>
			<span className="ml-5 mr-2 p-2 w-10 bg-gray-200 text-center">
				{props.valueState === undefined ? props.default : props.valueState}
			</span>
			<span>{props.unit}</span>
		</div>
	);
};

export default Slider;
