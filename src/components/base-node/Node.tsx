import { component$ } from '@builder.io/qwik';
import { BaseNodeProps } from './Node.interfaces';

export const BaseNodeDefaultStyle = {
	fontColor: '#000000',
	backgroundColor: '#ffffff',
	borderColor: '#ffffff',
};

export const BaseNode = component$((props: BaseNodeProps) => {
	const styling = {
		left: `${props.x}px`,
		top: `${props.y}px`,

		color: props.fontColor,
		backgroundColor: props.backgroundColor,
		borderColor: props.borderColor,
	};

	return (
		<div id={props.id} class='node' style={styling}>
			{props.text}
		</div>
	);
});
