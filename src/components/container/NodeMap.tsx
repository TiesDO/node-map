import {
	component$,
	useStylesScoped$,
	Slot,
	useContextProvider,
	useStore,
} from '@builder.io/qwik';

import mapStyles from './nodeMap.css?inline';
import {
	NodeMapProps,
	NodeMapState,
	NodeMapStateDefault,
} from './NodeMap.interfaces';

/***
 *  Component
 */
export const NodeMap = component$((props: NodeMapProps) => {
	useStylesScoped$(mapStyles);

	const state = useStore<NodeMapState>(
		props.initialState ?? NodeMapStateDefault,
		{ recursive: true }
	);

	// provide context for all the children
	useContextProvider(props.context, state);

	return (
		<div class='node-map'>
			<Slot />
		</div>
	);
});
