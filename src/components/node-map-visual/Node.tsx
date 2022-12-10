import { component$ } from '@builder.io/qwik';

export type TextNodeProps = {
	text: string;
	id: string;
	x: number;
	y: number;
};

export const TextNode = component$((props: TextNodeProps) => {
	return (
		<div
			id={props.id}
			class='node'
			style={{ left: `${props.x}px`, top: `${props.y}px` }}>
			{props.text}
		</div>
	);
});
