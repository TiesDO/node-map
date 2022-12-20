import {
	$,
	component$,
	useClientEffect$,
	useContext,
	useStore,
	useStyles$,
} from '@builder.io/qwik';
import {
	PropertiesEditorState,
	PropertyEditorProps,
} from './PropertyEditor.interfaces';

import styles from './propertyEditor.css?inline';

export const PropertyEditor = component$((props: PropertyEditorProps) => {
	useStyles$(styles);

	const state = useContext(props.context);
	const properties = useStore<PropertiesEditorState>({});

	useClientEffect$(({ track }) => {
		// track the current selected node
		const selected = track(() => state.currentSelected);

		// find the right node
		if (selected) {
			properties.currentNodeId = selected;
			const found = state.nodes.find((n) => {
				n.id === selected;
			});

			if (!found) {
				state.currentSelected = null;
				return;
			}

			properties.currentNode = found;

			// show the properties
			for (const key in found) {
				properties.properties?.push({ identifier: key });
			}
		}
	});

	return (
		<div class='node-prop-editor'>
			{properties.properties ? (
				properties.properties.map((p) => {
					return <li key={p.identifier}>{p.identifier}</li>;
				})
			) : (
				<div>no props</div>
			)}
		</div>
	);
});
