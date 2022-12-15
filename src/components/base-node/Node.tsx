import { component$ } from '@builder.io/qwik';

export interface BaseNodeProps {
	text: string;
	id: string;
	x: number;
	y: number;
	editable: string[];

	fontColor: string;
	backgroundColor: string;
	borderColor: string;
}

export const BaseNodeDefaultStyle = {
	fontColor: '#000000',
	backgroundColor: '#ffffff',
	borderColor: '#ffffff',
};

export const TextNode = component$((props: BaseNodeProps) => {
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
