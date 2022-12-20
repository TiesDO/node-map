import { component$, useContext, useStylesScoped$ } from '@builder.io/qwik';

import styles from './nodebox.css?inline';
import { NodeBoxProps } from './NodeBox.interfaces';

export const NodeBox = component$((props: NodeBoxProps) => {
	useStylesScoped$(styles);

	const state = useContext(props.context);

	return (
		<ul>
			<li
				onClick$={() => {
					state.nodes.push({
						id: 'defaultnodeID',
						editable: [''],

						meta: {
							text: 'test',
						},

						position: { x: 300, y: 300 },
					});
				}}>
				Default node
			</li>
		</ul>
	);
});
