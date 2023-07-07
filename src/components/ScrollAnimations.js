import React from 'react';
import { motion } from 'framer-motion';

const ScrollAnimations = () => {
	return (
		<div style={{ minHeight: '50vh' }}>
			<motion.p
				initial={{ opacity: 0, x: 0 }}
				whileInView={{ opacity: 1, x: 500 }} //** you can place duration here */
				style={{ fontSize: '150px', marginBottom: '200px' }}
			>
				Item one
			</motion.p>
			<motion.p
				initial={{ opacity: 0, x: 700 }}
				whileInView={{ opacity: 1, x: 200 }} //** you can place duration here */
				style={{ fontSize: '150px', marginBottom: '200px' }}
			>
				Item one
			</motion.p>
			{/* <motion.p
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				style={{ fontSize: '150px', marginBottom: '200px' }}
			>
				Item one
			</motion.p>
			<motion.p
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				style={{ fontSize: '150px', marginBottom: '200px' }}
			>
				Item one
			</motion.p>
			<motion.p
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				style={{ fontSize: '150px', marginBottom: '200px' }}
			>
				Item one
			</motion.p> */}
		</div>
	);
};

export default ScrollAnimations;
