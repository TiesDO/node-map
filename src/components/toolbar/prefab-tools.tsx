import { $, QwikMouseEvent } from '@builder.io/qwik';
import { ToobarToolProps } from './toolbar';

export const MoveTool: ToobarToolProps = {
	name: 'move',
	onMouseDown$: $((e: QwikMouseEvent) => {
		console.log('using the move tool');
	}),
};

export const CreateTool: ToobarToolProps = {
	name: 'create',
	onMouseDown$: $(() => console.log('Create tool used')),
};
