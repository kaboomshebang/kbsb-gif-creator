function ExportError(props) {
	return (
		<div className="mt-8">
			<span className="p-4 bg-orange-100">{props.error}</span>
		</div>
	);
}

export default ExportError;
