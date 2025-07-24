import React from 'react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import useBaseUrl from '@docusaurus/useBaseUrl';

if (ExecutionEnvironment.canUseDOM) {
	import('@motion-canvas/player');
}

export default function OriginalMotionCanvasPlayer({name}) {
	return (
		<div>
			<motion-canvas-player
				src={useBaseUrl(`/animations/build/src/projects/${name}.js`)}
			/>
		</div>
	);
}