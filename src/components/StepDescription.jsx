const StepDescription = ({ title = 'Title', description = 'Description' }) => {
	return (
		<div className="pt-10 pb-5 text-left">
			<h4 className="font-medium">{title}</h4>
			<p className="text-sm text-gray-400">{description}</p>
		</div>
	);
};

export default StepDescription;
