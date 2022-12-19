import { component$, useContext } from '@builder.io/qwik';
import { NodeCanvasProps } from './NodeCanvas.interfaces';
import { NodeMapState } from '../container/NodeMap.interfaces';

export const NodeCanvas = component$((props: NodeCanvasProps) => {
	const state: NodeMapState = useContext(props.context);

	return (
		<div class='nodemap-canvas'>
			{state.nodes.map((n) => {
				return <div>{n.meta.text}</div>;
			})}
		</div>
	);
});
