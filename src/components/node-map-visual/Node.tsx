import { component$ } from '@builder.io/qwik';

export type TextNodeProps = {
	text: string;
	id: string;
};

export const TextNode = component$((props: TextNodeProps) => {
	return (
		<div id={props.id} class='node'>
			{props.text}
		</div>
	);
});
