const ImageSeq = (props) => {
	return (
		<div id="image-container" className="grid grid-cols-2 md:grid-cols-4 gap-2">
			{props.children}
		</div>
	);
};

export default ImageSeq;
