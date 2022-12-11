import {
	component$,
	useClientEffect$,
	useContext,
	useStore,
} from '@builder.io/qwik';
import { NodeMapContext, NodeMapState } from './NodeMap';

export type NodePropertiesEditorState = {
	activeNode: any;
	properties: NodePropertyEditProps[];
};

export const NodePropertiesEditor = component$(() => {
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
			props.push({
				propname: key,
				state: state.activeNode,
			});
		}

		state.properties = props;
	});

	return (
		<div class='nodemap-properties-editor' id='propertyPanel'>
			{state.activeNode
				? state.properties.map((p) => (
						<NodePropertyEdit key={p.propname} {...p} />
				  ))
				: 'no node selected'}
		</div>
	);
});

export type NodePropertyEditProps = {
	propname: string;
	state: any;
};

export const NodePropertyEdit = component$((props: NodePropertyEditProps) => {
	return <input value={props.state[props.propname]} />;
});
