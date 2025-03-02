import React from 'react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

if (ExecutionEnvironment.canUseDOM) {
	import('@motion-canvas/player');
}

export default function OriginalMotionCanvasPlayer({name}) {
	return (
		<div>
			<motion-canvas-player
				src={`/animations/build/src/projects/${name}.js`}
			/>
		</div>
	);
}