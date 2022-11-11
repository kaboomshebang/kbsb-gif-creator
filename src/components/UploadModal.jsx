import { useState } from 'react';

const UploadModal = (props) => {
	const [drag, setDrag] = useState(false);
	const [uploadedImages, setUploadedImages] = useState([]);
	const [showUploads, setShowUploads] = useState(true);

	const dragImageEnter = (e) => {
		e.preventDefault();
		setDrag(true);
	};

	const dragImageOver = (e) => {
		e.preventDefault();
	};

	const dragLeave = (e) => {
		e.preventDefault();
		setDrag(false);
	};

	const dropImage = (e) => {
		e.preventDefault();
		setDrag(false);

		// store the uploaded items
		let fileNames = [];
		let files = [];

		for (const i of e.dataTransfer.files) {
			fileNames = [...fileNames, i.name];
			files = [...files, [URL.createObjectURL(i), i.name]];
		}
		props.filesFunc(files);
		saveFileNames(fileNames);
	};

	const selectedImage = (e) => {
		let fileNames = [];
		let files = [];

		for (const i of e.target.files) {
			fileNames = [...fileNames, i.name];
			files = [...files, [URL.createObjectURL(i), i.name]];
		}
		props.filesFunc(files);
		saveFileNames(fileNames);
	};

	const saveFileNames = (fileNames) => {
		setUploadedImages(fileNames);
		setShowUploads(true);
	};

	return (
		<>
			<section className="z-10 fixed inset-0 sm:inset-auto sm:right-1/2 sm:top-10 sm:translate-x-1/2 sm:bottom-5 w-full h-full sm:w-96 sm:h-3/4 bg-white drop-shadow-xl">
				<header className="flex justify-between bg-black p-2">
					<span className="flex items-center">
						<img
							src="https://assets.kbsb.app/svg/shebang_grey_small.svg"
							alt="Shebang"
						/>
						<span className="text-white text-center font-medium ml-2">
							Upload images
						</span>
					</span>
					<button onClick={props.btnClick}>
						<img src="https://assets.kbsb.app/svg/icon_cross_white.svg" alt="Cross" />
					</button>
				</header>
				<article className="flex flex-col items-center h-full p-5">
					<div
						id="drop-zone"
						onDragEnter={dragImageEnter}
						onDragOver={dragImageOver}
						onDrop={dropImage}
						onDragLeave={dragLeave}
						onDragExit={dragLeave}
						onDragEnd={dragLeave}
						className={`flex justify-center items-center bg-gray-300 w-full ${
							drag ? 'border-4' : 'border-2'
						} border-dashed border-gray-600 p-6 h-[calc(50%_-_1.5rem)]`}
					>
						<div className="pointer-events-none flex flex-col items-center">
							<img
								className={`pointer-events-none w-14 ${drag && 'animate-bounce'}`}
								src="https://assets.kbsb.app/svg/icon_arrow_down_grey.svg"
								alt="Arrow"
							/>
							<span className="pointer-events-none text-xl text-white text-center font-normal mt-4">
								Drag-and-drop files
							</span>
						</div>
					</div>
					<div className="flex justify-center items-center bg-gray-100 w-full p-6 h-[calc(50%_-_1.5rem)]">
						<label className="cursor-pointer" htmlFor="files">
							<div className="flex flex-col items-center">
								<img
									className="w-14"
									src="https://assets.kbsb.app/svg/icon_file_upload_black.svg"
									alt="File"
								/>
								<div>
									<p className="text-xl text-black font-medium mt-4">
										Select files to upload
									</p>
									<input
										onChange={selectedImage}
										className="text-xl text-black font-medium mt-4"
										type="file"
										id="files"
										name="files"
										accept="image/png, image/jpeg"
										multiple
										style={{ display: 'none' }}
									></input>
								</div>
							</div>
						</label>
					</div>
				</article>
				{showUploads ? (
					<div className="absolute bottom-6 right-5 p-6 bg-white border-2 border-green-700 shadow-lg">
						<ul>
							{uploadedImages.map((name, index) => (
								<li key={index}>✔ {name}</li>
							))}
						</ul>
					</div>
				) : (
					''
				)}
			</section>
		</>
	);
};

export default UploadModal;
