import { $, QwikMouseEvent } from '@builder.io/qwik';
import { NodeMapState } from '../node-map-visual/NodeMap';
import { ToobarToolProps } from './toolbar';

export const MoveTool: ToobarToolProps = {
	name: 'move',
	onMouseDown$: $((e: QwikMouseEvent, state: NodeMapState) => {
		// select the node
		console.log(state);
	}),
};

export const CreateTool: ToobarToolProps = {
	name: 'create',
	onMouseDown$: $(() => console.log('Create tool used')),
};
