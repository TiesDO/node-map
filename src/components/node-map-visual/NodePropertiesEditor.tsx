import {
	component$,
	useStyles$,
	useClientEffect$,
	useContext,
	useStore,
} from '@builder.io/qwik';
import { NodeMapContext, NodeMapState } from './NodeMap';

import editorStyles from './nodePropertiesEditor.css?inline';

export type NodePropertiesEditorState = {
	activeNode: any;
	properties: NodePropertyEditProps[];
};

export const NodePropertiesEditor = component$(() => {
	useStyles$(editorStyles);
	const mapContext = useContext<NodeMapState>(NodeMapContext);

	// find the current node
	const state = useStore<NodePropertiesEditorState>({
		activeNode: null,
		properties: [],
	});

	useClientEffect$(({ track }) => {
		const targetId = track(() => mapContext.singleSelect);

		if (!targetId) {
			state.activeNode = null;
			return;
		}

		// find the node
		const node = mapContext.nodes.find((n) => n.id === targetId);

		if (!node) {
			state.activeNode = null;
			return;
		}

		state.activeNode = node;

		const props: NodePropertyEditProps[] = [];

		for (const [key] of Object.entries(node)) {
			if (!node.editable.includes(key)) continue;
			props.push({
				propname: key,
				state: state.activeNode,
			});
		}

		state.properties = props;
	});

	const properties = state.activeNode
		? state.properties.map((p) => <NodePropertyEdit key={p.propname} {...p} />)
		: 'no node selected';

	return (
		<div class='nodemap-properties-editor' id='propertyPanel'>
			<div class='header'>properties</div>
			<div class='inner'>{properties}</div>
		</div>
	);
});

export type NodePropertyEditProps = {
	propname: string;
	state: any;
};

export type NodePropertyEditState = {};

export const NodePropertyEdit = component$((props: NodePropertyEditProps) => {
	return (
		<>
			<b>{props.propname}: </b>
			<input
				value={props.state[props.propname]}
				onInput$={(e) => {
					props.state[props.propname] = (e.target as HTMLInputElement).value;
				}}
			/>
		</>
	);
});
