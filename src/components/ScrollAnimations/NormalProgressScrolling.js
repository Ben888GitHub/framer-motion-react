import { motion, useScroll } from 'framer-motion';
import { LoremIpsum } from './LoremIpsum';
import './styles.css';

const NormalProgressScrolling = () => {
	const { scrollYProgress } = useScroll();

	return (
		<>
			<motion.div className="progress-bar" style={{ scaleX: scrollYProgress }}>
				<h1>
					<code>useScroll</code> demo
				</h1>
				<LoremIpsum />
			</motion.div>
		</>
	);
};

export default NormalProgressScrolling;
