import React from 'react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

if (ExecutionEnvironment.canUseDOM) {
	import('@motion-canvas/player');
}

export default function MotionCanvasPlayer({
	name,
	banner,
	small,
}) {
	return (
		<div>
			<motion-canvas-player
				src={`/animations/${name}.js`}
				auto={banner}
			/>
		</div>
	);
}