import { motion } from 'framer-motion';

const KeyFrameAnimation = () => {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column',
				gap: '2rem'
			}}
		>
			<motion.div
				style={{
					height: '200px',
					width: '200px',
					background: 'blue'
				}}
				animate={{
					x: [100, 200, 400, 150],
					y: [50, 100, -200, 50],
					scale: [1, 1.2, 1.4, 1, 1],
					rotate: [0, 0, 270, 270, 0],
					transition: {
						duration: 2
						// repeat: Infinity
					},
					borderRadius: ['20%', '20%', '50%', '50%', '20%']
				}}
			></motion.div>
		</div>
	);
};

export default KeyFrameAnimation;
