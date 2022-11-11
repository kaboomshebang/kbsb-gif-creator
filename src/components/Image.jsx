import { useRef, useState, useEffect } from 'react';

const Image = (props) => {
	const [imageSpecs, setImageSpecs] = useState({});

	const { fileName = 'Placeholder image' } = props;

	const imgRef = useRef(null);

	useEffect(() => {
		// do not apply to the default placeholder image
		if (props.alt !== 'Placeholder') {
			imgRef.current.onload = () => {
				const ratio =
					Math.round(
						(imgRef.current.naturalWidth / imgRef.current.naturalHeight) * 1000
					) / 1000;

				setImageSpecs({
					width: imgRef.current.naturalWidth,
					height: imgRef.current.naturalHeight,
					ratio: ratio,
				});

				props.ratioFunc([...props.ratioState, ratio]);
			};
		}
	});

	const moveImage = () => {
		// .filter filesState so that a new array is returned
		const filesState = props.filesState.filter((el) => el);
		const imgToMove = filesState[props.index];
		const newPos = props.index + 1;

		if (newPos !== filesState.length) {
			// remove the image from the array
			filesState.splice(props.index, 1);
			// insert the image into the new position
			filesState.splice(newPos, 0, imgToMove);
		}

		// update the files state
		props.filesFunc(filesState);
	};

	const removeImage = () => {
		// setRatio(null);

		const newFilesState = props.filesState.filter((el, i) => (i !== props.index ? el : null));
		props.filesFunc(newFilesState);

		//FIX the ratio state
		const newRatioState = props.ratioState.filter((el, i) => (i !== props.index ? el : null));
		props.ratioFunc(newRatioState);
	};

	return (
		<figure className="relative flex flex-col items-center justify-between bg-gray-100">
			{props.alt !== 'Placeholder' ? (
				<div className="absolute top-0 w-full flex justify-between p-2">
					<button
						className="w-8 p-1 bg-gray-700/75 rounded-md font-bold text-white"
						onClick={moveImage}
					>
						{props.index + 1}
					</button>
					<button className="w-8 p-2 bg-gray-700/75 rounded-md" onClick={removeImage}>
						<img
							className="drop-shadow-md"
							src="https://assets.kbsb.app/svg/icon_cross_white.svg"
							alt="Cross"
						/>
					</button>
				</div>
			) : (
				''
			)}
			<img
				ref={imgRef}
				className="w-full h-60 object-cover"
				src={props.url}
				alt={props.alt}
			/>
			<figcaption className="text-xs py-2 text-gray-400 text-center">
				<div className="font-bold">📷 {fileName}</div>

				{props.alt !== 'Placeholder' && (
					<div className="mt-2">
						<div>
							width: {imageSpecs.width}px
							<br />
							height: {imageSpecs.height}px
						</div>
						<div>ratio: {imageSpecs.ratio} : 1</div>
					</div>
				)}
			</figcaption>
		</figure>
	);
};

export default Image;
