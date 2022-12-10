import { component$ } from '@builder.io/qwik';

export type TextNodeProps = {
	text: string;
};

export const TextNode = component$((props: TextNodeProps) => {
	return <div class='node'>{props.text}</div>;
});
