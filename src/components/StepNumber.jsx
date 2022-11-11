const StepId = (props) => {
	const style = {
		backgroundColor: props.color,
	};

	return (
		<span className="px-4 py-2 text-white font-bold" style={style}>
			{props.number}
		</span>
	);
};

export default StepId;
