import { component$, useStyles$, useStore, useWatch$ } from '@builder.io/qwik';
import mainStyle from './nodemap.css?inline';

export type NodeMapSettings = {
	gridSize: number;
	mapBackground: string;
	gridColor: string;
};

export const NodeMapSettingsDefault: NodeMapSettings = {
	gridSize: 20,
	mapBackground: '#333',
	gridColor: '#555',
};

export const MapVisual = component$(() => {
	useStyles$(mainStyle);

	// set store to default
	const gridSettings = useStore<NodeMapSettings>(NodeMapSettingsDefault);

	useWatch$(async ({ track }) => {
		track(() => gridSettings.gridSize);
	});

	return (
		<div
			class='nodemap-container'
			style={{
				'--bgc': gridSettings.mapBackground,
				'--gc': gridSettings.gridColor,
				'--gs': `${gridSettings.gridSize}px`,
			}}></div>
	);
});
