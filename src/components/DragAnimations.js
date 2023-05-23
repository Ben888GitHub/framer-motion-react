import { motion } from 'framer-motion';
import { useState } from 'react';

// * Drag Constraint on all sides might be useful one day

const DragAnimations = () => {
	return (
		<div>
			<h1 style={{ marginBottom: '100px', textAlign: 'center' }}>
				Draggable objects
			</h1>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					gap: '200px',
					alignItems: 'center',
					justifyContent: 'center',
					marginTop: '80px'
				}}
			>
				<div>
					<p>No constraint</p>
					<motion.div
						style={{
							width: '100px',
							height: '100px',
							backgroundColor: 'blue'
						}}
						drag
					></motion.div>
				</div>
				<div>
					<p>Drag y only</p>
					<motion.div
						style={{
							width: '100px',
							height: '100px',
							backgroundColor: 'blue'
						}}
						drag="y"
					></motion.div>
				</div>
				<div>
					<p>Drag contrainst</p>
					<motion.div
						style={{
							width: '100px',
							height: '100px',
							backgroundColor: 'blue'
						}}
						drag
						// dragConstraints={{ left: 0, right: 100 }}
						dragConstraints={{
							top: -50,
							left: -50,
							right: 50,
							bottom: 50
						}}
					></motion.div>
				</div>
			</div>
			<br />
			<br />
			<br />
		</div>
	);
};

export default DragAnimations;
