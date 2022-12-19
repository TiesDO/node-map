import { component$, useContext } from '@builder.io/qwik';
import { NodeCanvasProps } from './NodeCanvas.interfaces';
import { NodeMapState } from '../container/NodeMap.interfaces';
import { BaseNode } from '../base-node/Node';

export const NodeCanvas = component$((props: NodeCanvasProps) => {
	const state: NodeMapState = useContext(props.context);

	return (
		<div class='nodemap-canvas'>
			{state.nodes.map((n) => {
				return <BaseNode key={n.id} {...n} />;
			})}
		</div>
	);
});
