import { component$, useClientEffect$, useContext } from '@builder.io/qwik';
import { NodeMapContext, NodeMapState } from './NodeMap';

export const NodePropertiesEditor = component$(() => {
	const mapContext = useContext<NodeMapState>(NodeMapContext);

	useClientEffect$(({ track }) => {
		const displayTarget = track(() => mapContext.singleSelect);

		console.log(displayTarget);

		const panel = document.querySelector('#propertyPanel');

		if (!panel) {
			return;
		}

		if (displayTarget?.length === 0 || displayTarget === null) {
			panel.textContent = 'no props to display';
		}

		panel.textContent = displayTarget;
	});

	return (
		<div class='nodemap-properties-editor' id='propertyPanel'>
			no props to display
		</div>
	);
});
