import { component$, Slot, useStyles$, useStore } from '@builder.io/qwik';

import toolbarStyle from './toolbar.css?inline';

export type ToolbarProps = {};

export type ToolbarState = {
	x: number;
	y: number;
};

export const Toolbar = component$(() => {
	useStyles$(toolbarStyle);

	const state = useStore({ x: 15, y: 15 });

	return (
		<div class='toolbar' style={`--px: ${state.x}px; --py: ${state.y}px`}>
			<div class='dragpoint'></div>
			<div class='tools'>
				<Slot name='tools' />
			</div>
		</div>
	);
});

export type ToobarToolProps = {
	name: string;
	onMouseDown?: () => void;
	onMouseUp?: () => void;
	onDragStart?: () => void;
	onDragMove?: () => void;
	onDragEnd?: () => void;
};

export const ToolbarTool = component$((props: ToobarToolProps) => {
	const name: string = props.name[0] + props.name[1];

	return <div class='tool'>{name.toUpperCase()}</div>;
});
