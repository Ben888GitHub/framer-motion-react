import { motion } from 'framer-motion';
import { useState } from 'react';

const WithoutAnimatePresence = () => {
	// State to toggle visibility
	const [show, setShow] = useState(false);

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '5px',
				alignItems: 'center'
			}}
		>
			<h1 style={{ position: 'relative', marginTop: '200px' }}>
				Example exit animation with a Box without AnimatePresence Component
			</h1>
			{show && (
				<motion.div
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 100 }}
					style={{
						height: '140px',
						width: '140px',
						background: 'blue',
						position: 'relative'
					}}
				></motion.div>
			)}

			<button
				onClick={() => setShow(!show)}
				style={{ padding: '15px 24px', fontSize: '22px' }}
			>
				{show ? 'Remove Cube' : 'Add Cube'}
			</button>
		</div>
	);
};

export default WithoutAnimatePresence;
