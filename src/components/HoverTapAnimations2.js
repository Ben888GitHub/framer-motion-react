import { motion } from 'framer-motion';
import { useState } from 'react';

const HoverTapAnimations2 = () => {
	const [showCard, setShowCard] = useState(false);

	return (
		<div>
			<motion.div
				style={{
					background: '#fff',
					padding: '3rem 2rem',
					borderRadius: '8px',
					boxShadow: '0 0 10px rgba(0,0,0,0.2)'
				}}
				whileHover={{
					scale: 1.1,
					boxShadow: '0 0 10px rgba(0,0,0,0.4)'
				}}
				layout
				transition={{
					layout: {
						duration: 1,
						type: 'spring'
					}
				}}
				onClick={() => setShowCard(!showCard)}
			>
				<motion.h4 layout="position">Hover or click</motion.h4>
				{showCard && (
					<motion.p
						style={{ width: '600px' }}
						initial={{ opacity: 0 }}
						animate={{
							opacity: 1
						}}
					>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
						error reiciendis iure architecto qui magni, excepturi voluptatum
						repudiandae nihil rerum eveniet pariatur ipsa velit similique et
						aliquam, deserunt totam explicabo.
					</motion.p>
				)}
			</motion.div>
		</div>
	);
};

export default HoverTapAnimations2;
