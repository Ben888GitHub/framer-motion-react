import WithAnimatePresence from './components/WithAnimatePresence';
import './App.css';
import WithoutAnimatePresence from './components/WithoutAnimatePresence';
import AnimationsType from './components/AnimationsType';
import DragAnimations from './components/DragAnimations';
import HoverTapAnimations from './components/HoverTapAnimations';
import HoverTapAnimations2 from './components/HoverTapAnimations2';
import ScrollAnimations from './components/ScrollAnimations';
import TransitionsType from './components/TransitionsType';
import KeyFrameAnimation from './components/KeyFrameAnimation';

import { useState } from 'react';
import CheckboxAnimation from './components/CheckboxAnimation';

function App() {
	const [showMain, setShowMain] = useState(true);

	return (
		<div className="App">
			<h1>Framer Motion React</h1>
			<button onClick={() => setShowMain(!showMain)}>
				{showMain ? 'Show 6 Ideas' : 'Show Main'}
			</button>
			{showMain ? (
				<>
					<WithAnimatePresence />
					<WithoutAnimatePresence />
					<AnimationsType />
					<DragAnimations />
					<HoverTapAnimations />
					<HoverTapAnimations2 />
					<ScrollAnimations />
					<TransitionsType />
					<br />
					{/* <KeyFrameAnimation /> */}
					<br />
					<CheckboxAnimation />
				</>
			) : null}
		</div>
	);
}

export default App;
