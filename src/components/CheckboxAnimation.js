import { useState } from 'react';
import { motion } from 'framer-motion';
import './styles.css';

const CheckboxAnimation = () => {
	const [isChecked, setIsChecked] = useState(false);
	const [isBouncedChecked, setIsBouncedChecked] = useState(false);
	const [isVibrationChecked, setIsVibrationChecked] = useState(false);
	const [isFadedChecked, setIsFadedChecked] = useState(false);

	const handleToggle = () => {
		setIsChecked(!isChecked);
	};

	return (
		<>
			<label>
				{/* Basic Animated Checkbox */}
				<motion.input
					type="checkbox"
					checked={isChecked}
					onChange={handleToggle}
					initial={{ scale: 0 }}
					animate={{ scale: 1.5 }}
					transition={{ duration: 0.2 }}
				/>
				<span>Checkbox</span>
			</label>
			<br />
			<label>
				{/* Bouncing Animated Checkbox */}
				<motion.input
					type="checkbox"
					checked={isBouncedChecked}
					onChange={() => setIsBouncedChecked(!isBouncedChecked)}
					initial={{ scale: 1 }}
					animate={{ scale: isBouncedChecked ? 1.5 : 1 }}
					transition={{ duration: 0.2, type: 'spring', bounce: 1 }}
				/>
				<span>Bouncing Checkbox</span>
			</label>
			<br />
			<label>
				{/* Vibrating Animated Checkbox */}
				<motion.input
					type="checkbox"
					checked={isVibrationChecked}
					onChange={() => setIsVibrationChecked(!isVibrationChecked)}
					initial={{ x: 0, scale: 1.5 }}
					animate={{
						x: isVibrationChecked ? [-2, 2, -2, 0] : 0 // this is used in Trello when you complete all checkboxes
					}}
					transition={{ duration: 0.2 }}
				/>
				<span>Trello Vibration Checkbox</span>
			</label>
			<br />
			<label>
				<motion.input
					type="checkbox"
					checked={isFadedChecked}
					onChange={() => setIsFadedChecked(!isFadedChecked)}
					initial={{ opacity: 0 }}
					animate={{ opacity: isFadedChecked ? 1 : 0.5 }}
					transition={{ duration: 0.2 }}
				/>
				<span>Fade Animation Checkbox</span>
			</label>
		</>
	);
};

export default CheckboxAnimation;
