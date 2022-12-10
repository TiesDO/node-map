import {
	component$,
	useStyles$,
	useStore,
	PropFunction,
	useContext,
} from '@builder.io/qwik';
import { NodeMapContext, NodeMapState } from '../node-map-visual/NodeMap';

import toolbarStyle from './toolbar.css?inline';

export type ToolbarProps = {
	nodeMapId?: string;
	tools: ToobarToolProps[];
};

export type ToolbarState = {
	x: number;
	y: number;
	inDrag: boolean;
};

export const ToolbarDefaultState = {
	x: 15,
	y: 15,
	inDrag: false,
};

export const Toolbar = component$((props: ToolbarProps) => {
	useStyles$(toolbarStyle);

	// set the default state
	const state = useStore(ToolbarDefaultState);

	// client effect for dragging

	return (
		<div class='toolbar' style={`--px: ${state.x}px; --py: ${state.y}px`}>
			<div id='dragPoint' class='dragpoint'></div>
			<div class='tools'>
				{props.tools.map((t) => {
					return <ToolbarTool {...t} />;
				})}
			</div>
		</div>
	);
});

export type ToobarToolProps = {
	name: string;
	onMouseDown$?: PropFunction<() => void>;
	onMouseUp$?: PropFunction<() => void>;
	onDragStart$?: PropFunction<() => void>;
	onDragMove$?: PropFunction<() => void>;
	onDragEnd$?: PropFunction<() => void>;
};

export const ToolbarTool = component$((props: ToobarToolProps) => {
	const name: string = props.name[0] + props.name[1];

	const nodemap = useContext<NodeMapState>(NodeMapContext);

	nodemap.activeTool = props;

	return <div class='tool'>{name.toUpperCase()}</div>;
});
