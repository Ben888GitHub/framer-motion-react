import { motion } from 'framer-motion';

const HoverTapAnimations = () => {
	return (
		<div className="container">
			<motion.h1
				initial={{
					scale: 0,
					opacity: 0
				}}
				animate={{
					scale: 1.5,
					opacity: 1
				}}
				whileTap={{
					scale: 2
				}}
			>
				While Tap
			</motion.h1>
			<br />
			<motion.h1
				initial={{
					scale: 0,
					opacity: 0
				}}
				animate={{
					scale: 1.5,
					opacity: 1
				}}
				whileHover={{
					scale: 2
				}}
			>
				While Hover
			</motion.h1>
			<br />
			<motion.h1 whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }}>
				Hover and tap on me
			</motion.h1>
		</div>
	);
};

export default HoverTapAnimations;
