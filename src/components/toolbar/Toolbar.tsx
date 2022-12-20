import { component$, useContext } from '@builder.io/qwik';
import { ToolbarProps } from './Toolbar.interfaces';

export const Toolbar = component$((props: ToolbarProps) => {
	const state = useContext(props.context);

	return (
		<ul>
			{props.tools.map((t) => (
				<li key={t.name} onClick$={() => (state.activeTool = t)}>
					{t.name}
				</li>
			))}
		</ul>
	);
});
