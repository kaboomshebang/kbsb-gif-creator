import React from 'react';

class ExportModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
		};
	}

	componentDidMount() {
		// delay the state change for the opacity transition
		setTimeout(() => {
			this.setState({
				showModal: true,
			});
		}, 100);
	}

	render() {
		const styles = {
			transition: 'opacity 1000ms',
			opacity: this.state.showModal ? 1 : 0,
		};

		return (
			<>
				<section
					style={styles}
					className="z-10 fixed inset-0 sm:inset-auto sm:right-1/2 sm:top-10 sm:translate-x-1/2 sm:bottom-5 w-full h-full sm:w-96 sm:h-3/4 bg-white drop-shadow-xl"
				>
					<header className="flex justify-between bg-black p-2">
						<span className="flex items-center">
							<img src="https://kbsb.app/assets/svg/shebang_grey_small.svg" alt="Shebang" />
							<span className="text-white font-medium ml-2">Generated GIF</span>
						</span>
						<button onClick={this.props.btnClick}>
							<img src="https://kbsb.app/assets/svg/icon_cross_white.svg" alt="Cross" />
						</button>
					</header>
					<article className="flex flex-col items-center h-full p-5">
						<img src={this.props.image} alt="GIF" />
						<a
							download="kaboom.gif"
							href={this.props.image}
							className="cursor-pointer px-5 py-2 mt-6 bg-gray-300"
						>
							🎬 Download GIF
						</a>
						<p className="px-5 mt-6 text-center leading-6">
							📱 <span className="underline underline-offset-2">On mobile</span>:
							<br />
							<span className="text-gray-400">press-and-hold to save GIF</span>
						</p>
					</article>
				</section>
			</>
		);
	}
}

export default ExportModal;
