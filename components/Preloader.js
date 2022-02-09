import { useState } from 'react';
import { animated, useTransition, config } from 'react-spring';

const Preloader = () => {
	const [show, set] = useState(false);
	const transitions = useTransition(show, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },

		config: {
			duration: 3000,
			s,
		},
		onRest: () => set(!show),
	});
	return transitions(
		(styles, item) =>
			item && (
				<animated.div style={styles}>
					<div className='preload-background'>
						<div className='centered'>
							<div className='blob-1'></div>
							<div className='blob-2'></div>
						</div>
					</div>
				</animated.div>
			)
	);
};

export default Preloader;
