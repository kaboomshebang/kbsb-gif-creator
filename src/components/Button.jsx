const Button = (props) => {
	const style = {
		backgroundColor: props.color,
	};

	return (
		<button
			id={props.id}
			style={style}
			className={`text-base font-medium bg-gray-300 px-7 py-2 ${
				props.active && 'bg-gray-700 text-white'
			}`}
			onClick={props.btnClick}
		>
			{props.children}
		</button>
	);
};

export default Button;
