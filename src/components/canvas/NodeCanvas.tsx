import { component$, useContext, $, QwikMouseEvent } from '@builder.io/qwik';
import { NodeCanvasProps } from './NodeCanvas.interfaces';
import { NodeMapState } from '../container/NodeMap.interfaces';
import { BaseNode } from '../base-node/Node';

export const NodeCanvas = component$((props: NodeCanvasProps) => {
	const state: NodeMapState = useContext(props.context);

	const handleClick = $((ev: QwikMouseEvent) => {
		if (!state.activeTool) {
			console.warn('no active tool');
			return;
		}

		state.activeTool.onClick(ev, props.context);
	});

	return (
		<div class='nodemap-canvas' onClick$={handleClick}>
			{state.nodes.map((n) => {
				return <BaseNode key={n.id} {...n} />;
			})}
		</div>
	);
});
