import { component$ } from '@builder.io/qwik';
import { BaseNodeProps } from './Node.interfaces';

export const BaseNodeDefaultStyle = {
	fontColor: '#000000',
	backgroundColor: '#ffffff',
	borderColor: '#ffffff',
};

export const BaseNode = component$((props: BaseNodeProps) => {
	const styling = {
		left: `${props.position.x}px`,
		top: `${props.position.y}px`,

		color: props.styles.nodeFontColor,
		backgroundColor: props.styles.nodeBackgroundColor,
		borderColor: props.styles.nodeBorderColor,
	};

	return (
		<div id={props.id} class='node' style={styling}>
			{props.meta.text}
		</div>
	);
});
