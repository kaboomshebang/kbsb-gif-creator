import React from 'react';
import Button from './Button';

class Loops extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			0: true,
			1: false,
			3: false,
		};

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		switch (e.target.id) {
			case 'loop_0':
				this.props.loopFunc(0);
				this.setState({
					0: true,
					1: false,
					3: false,
				});
				break;
			case 'loop_1':
				this.props.loopFunc(1);
				this.setState({
					0: false,
					1: true,
					3: false,
				});
				break;
			case 'loop_3':
				this.props.loopFunc(3);
				this.setState({
					0: false,
					1: false,
					3: true,
				});
				break;
			default:
				break;
		}
	}

	render() {
		return (
			<div className="flex row space-x-2">
				<Button active={this.state[0]} id="loop_0" btnClick={this.handleClick}>
					Forever
				</Button>
				<Button active={this.state[1]} id="loop_1" btnClick={this.handleClick}>
					1x
				</Button>
				<Button active={this.state[3]} id="loop_3" btnClick={this.handleClick}>
					3x
				</Button>
			</div>
		);
	}
}

export default Loops;
