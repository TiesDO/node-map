import {
	component$,
	useStyles$,
	useStore,
	PropFunction,
	useContext,
	useSignal,
	$,
	useClientEffect$,
	QwikMouseEvent,
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
	isOpen: boolean;
};

export const ToolbarDefaultState = {
	x: 15,
	y: 15,
	inDrag: false,
	isOpen: true,
};

export const Toolbar = component$((props: ToolbarProps) => {
	useStyles$(toolbarStyle);
	const toolbarEl = useSignal<HTMLDivElement>();

	// set the default state
	const state = useStore(ToolbarDefaultState);

	return (
		<div
			class='toolbar'
			ref={toolbarEl}
			style={`--px: ${state.x}px; --py: ${state.y}px`}>
			<div
				class='header'
				onDblClick$={() => {
					toolbarEl.value?.classList.toggle('collapsed');
				}}></div>
			{props.tools.map((t) => {
				return <ToolbarTool key={t.name} {...t} />;
			})}
		</div>
	);
});

export type ToobarToolProps = {
	name: string;
	onMouseDown$?: PropFunction<
		(event: QwikMouseEvent, state: NodeMapState) => void
	>;
};

export const ToolbarTool = component$((props: ToobarToolProps) => {
	const nodemap = useContext<NodeMapState>(NodeMapContext);

	const node = useSignal<HTMLDivElement>();

	const handleClick = $(() => {
		// do nothing if already active
		if (nodemap.activeTool?.name !== props.name) {
			nodemap.activeTool = props;
		}
	});

	useClientEffect$(({ track }) => {
		const value = track(() => nodemap.activeTool);

		// check if the attribute is set
		if (node.value?.dataset?.active) {
			node.value.dataset.active = `${value?.name === props.name}`;
		}
	});

	const name: string = props.name[0] + props.name[1];

	return (
		<div onClick$={handleClick} class='tool' ref={node} data-active='false'>
			{name.toUpperCase()}
		</div>
	);
});
