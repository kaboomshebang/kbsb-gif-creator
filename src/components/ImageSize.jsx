const ImageSize = (props) => {
	const { size = 'size', color = '#eee' } = props;

	const handleInput = (e) => {
		if (props.size === 'width') {
			// pass a new object to the setState function
			// passing a reference does not trigger a re-render
			props.sizeFunc({
				width: e.target.valueAsNumber,
				height: props.sizeState.height,
			});
		} else if (props.size === 'height') {
			props.sizeFunc({
				width: props.sizeState.width,
				height: e.target.valueAsNumber,
			});
		}
	};

	const style = {
		backgroundColor: color,
	};

	return (
		<div className="py-2">
			<span className="inline-block w-16 text-left">{size}</span>
			<input
				style={style}
				type="number"
				className="w-20 bg-gray-200 p-2"
				min="0"
				max="9999"
				step="1"
				value={props.value}
				onChange={handleInput}
			/>
			<span className="pl-2">pixels</span>
		</div>
	);
};

export default ImageSize;
