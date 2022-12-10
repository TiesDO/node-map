import { $ } from '@builder.io/qwik';
import { ToobarToolProps } from './toolbar';

export const MoveTool: ToobarToolProps = {
	name: 'move',
	onMouseDown$: $(() => console.log('Move tool used')),
};

export const CreateTool: ToobarToolProps = {
	name: 'create',
	onMouseDown$: $(() => console.log('Create tool used')),
};
