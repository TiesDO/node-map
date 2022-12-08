import { component$, useStyles$ } from '@builder.io/qwik';
import mainStyle from './nodemap.css?inline';

export type MapVisualType = {
	gridSize: number;
};

export const MapVisual = component$((props: MapVisualType) => {
	useStyles$(mainStyle);

	return <div class='nodemap-container'></div>;
});
