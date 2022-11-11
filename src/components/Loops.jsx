import { useState } from 'react';

import Button from './Button';

const Loops = (props) => {
	const [loop, setLoop] = useState({
		0: true,
		1: false,
		3: false,
	});

	const handleClick = (e) => {
		switch (e.target.id) {
			case 'loop_0':
				props.loopFunc(0);
				setLoop({
					0: true,
					1: false,
					3: false,
				});
				break;
			case 'loop_1':
				props.loopFunc(1);
				setLoop({
					0: false,
					1: true,
					3: false,
				});
				break;
			case 'loop_3':
				props.loopFunc(3);
				setLoop({
					0: false,
					1: false,
					3: true,
				});
				break;
			default:
				break;
		}
	};

	return (
		<div className="flex row space-x-2">
			<Button active={loop[0]} id="loop_0" btnClick={handleClick}>
				Forever
			</Button>
		</div>
	);
};

export default Loops;
