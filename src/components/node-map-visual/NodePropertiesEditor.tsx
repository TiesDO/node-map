import { component$, useContext } from '@builder.io/qwik';
import { NodeMapContext, NodeMapState } from './NodeMap';

export const NodePropertiesEditor = component$(() => {
	const { selection } = useContext<NodeMapState>(NodeMapContext);

	if (selection.length < 1) {
		// show the properties for
	}

	return <div class='nodemap-properties-editor'></div>;
});
