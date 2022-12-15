import { component$, useStyles$, useStylesScoped$ } from '@builder.io/qwik';
import { NodeMapProps } from './NodeMap.interfaces';

import mapStyles from './nodeMap.css?inline';
import globalStyles from './globalStyle.css?inline';

export const NodeMap = component$((props: NodeMapProps) => {
	useStylesScoped$(mapStyles);
	useStyles$(globalStyles);

	return <div class='node-map'></div>;
});
