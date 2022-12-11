import { component$ } from '@builder.io/qwik';

export interface BaseNodeProps {
	text: string;
	id: string;
	x: number;
	y: number;
	editable: string[];
}

export const TextNode = component$((props: BaseNodeProps) => {
	return (
		<div
			id={props.id}
			class='node'
			style={{ left: `${props.x}px`, top: `${props.y}px` }}>
			{props.text}
		</div>
	);
});
