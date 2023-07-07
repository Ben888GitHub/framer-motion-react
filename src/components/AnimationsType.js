import { motion } from 'framer-motion';
import { useState } from 'react';

const AnimationsType = () => {
	const [setScale, changeSetScale] = useState(1);
	const [setRotate, changeSetRotate] = useState(0);
	const [setX, changeSetX] = useState(0);
	const [setY, changeSetY] = useState(0);
	const [setOpacity, changeSetOpacity] = useState(1);
	const [currentShape, setCurrentShape] = useState([
		{ shape: 'Rectangle' },
		{ shape: 'Square' },
		{ shape: 'Triangle' }
	]);
	const [currentShapeIndex, setCurrentShapeIndex] = useState(0);

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '20px',
				alignItems: 'center',
				marginTop: '80px'
			}}
		>
			<div style={{ display: 'flex', gap: '120px' }}>
				<motion.h3>
					Current Shape: {currentShape[currentShapeIndex].shape}
				</motion.h3>
				<motion.h3>
					Next Shape:{' '}
					{currentShapeIndex === currentShape.length - 1
						? currentShape[0].shape
						: currentShape[currentShapeIndex + 1].shape}
				</motion.h3>
			</div>

			<div
				style={{
					minHeight: '50vh',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center'
				}}
			>
				{/* current shape to be displayed */}
				{(() => {
					if (currentShapeIndex === 0) {
						return (
							<motion.div
								style={{
									width: '100px',
									height: '50px',
									backgroundColor: 'red'
								}}
								animate={{
									scale: setScale,
									rotate: setRotate,
									x: setX,
									y: setY,
									opacity: setOpacity
								}}
								transition={{ duration: 3 }} // ** only this shape animate with duration
							></motion.div>
						);
					} else if (currentShapeIndex === 1) {
						return (
							<motion.div
								style={{
									width: '100px',
									height: '100px',
									backgroundColor: 'blue'
								}}
								animate={{
									scale: setScale,
									rotate: setRotate,
									x: setX,
									y: setY,
									opacity: setOpacity
								}}
							></motion.div>
						);
					} else if (currentShapeIndex === 2) {
						return (
							<motion.div
								style={{
									width: '0',
									height: '0',
									borderLeft: '50px solid transparent',
									borderRight: '50px solid transparent',
									borderBottom: '100px solid green'
								}}
								animate={{
									scale: setScale,
									rotate: setRotate,
									x: setX,
									y: setY,
									opacity: setOpacity
								}}
							></motion.div>
						);
					} else {
						return <h1>Can't figure out a shape</h1>;
					}
				})()}
			</div>

			<div>
				{/* change Shapes */}
				<button
					onClick={() => {
						if (currentShapeIndex === 2) {
							setCurrentShapeIndex(0);
						} else {
							setCurrentShapeIndex(currentShapeIndex + 1);
						}
					}}
				>
					Change Shape
				</button>
			</div>

			<div>
				{/* value controllers */}
				<button
					onClick={() => {
						changeSetX(setX - 100);
					}}
				>
					Move Left
				</button>
				<button onClick={() => changeSetX(setX + 100)}>Move Right</button>
				<button onClick={() => changeSetY(setY - 100)}>Move Up</button>
				<button onClick={() => changeSetY(setY + 100)}>Move Down</button>
				<button onClick={() => changeSetScale(setScale + 1)}>Scale Up</button>
				<button onClick={() => changeSetScale(setScale - 1)}>Scale Down</button>
				{/* <button onClick={() => changeSetRotate(setRotate + 10)}>Rotate</button> */}
				<input
					type="range"
					min="0"
					max="360"
					value={setRotate}
					onChange={(e) => {
						changeSetRotate(parseFloat(e.target.value));
					}}
				/>
				<button onClick={() => changeSetOpacity(setOpacity + 0.5)}>
					Fade In
				</button>
				<button onClick={() => changeSetOpacity(setOpacity - 1)}>
					Fade Out
				</button>
			</div>
			<br />
			<br />
		</div>
	);
};

export default AnimationsType;
