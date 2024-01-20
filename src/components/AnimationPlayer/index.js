import React from 'react';
import styles from './styles.module.css';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import clsx from 'clsx';

if (ExecutionEnvironment.canUseDOM) {
	import('@motion-canvas/player');
}

export default function AnimationPlayer({
	name,
	banner,
	small,
}) {
	return (
		<div
			className={clsx(
				styles.container,
				banner && styles.banner,
				small && styles.small,
			)}
		>
			<motion-canvas-player
				class={styles.player}
				src={`/animations/${name}.js`}
				auto={banner}
			/>
		</div>
	);
}