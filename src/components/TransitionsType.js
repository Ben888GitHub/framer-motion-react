import { motion } from 'framer-motion';

const baseStyle = {
	width: 200,
	height: 200,
	background: 'white',
	borderRadius: 20,
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center'
};

const transitionTypes = ['tween', 'inertia', 'spring'];

const TransitionsType = () => {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				background: 'grey',
				flexDirection: 'column',
				gap: '2rem'
			}}
		>
			{transitionTypes.map((type, idx) => (
				<motion.div
					key={idx}
					style={{
						...baseStyle
					}}
					animate={{
						x: type === 'inertia' ? 800 : 500,
						transition: {
							duration: 2,
							type,
							repeatType: type === 'tween' ? 'reverse' : 'loop',
							repeat: Infinity,
							...(type === 'tween' && { ease: 'easeInOut' }), // to prevent knocking on the wall
							...(type === 'inertia' && { velocity: 800 }),
							...(type === 'spring' && { bounce: 0.5 })
						}
					}}
				>
					Tween
				</motion.div>
			))}
		</div>
	);
};

export default TransitionsType;
