import { component$ } from '@builder.io/qwik';
import { NodeCanvasProps } from './NodeCanvas.interfaces';

export const NodeCanvas = component$((props: NodeCanvasProps) => {
	return (
		<div class='nodemap-canvas' {...eventMap} style={styleVariables}>
			{mapState.nodes.map((n) => {
				return <TextNode key={n.id} {...n} />;
			})}
		</div>
	);
});
