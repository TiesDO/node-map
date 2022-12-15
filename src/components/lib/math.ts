import { QwikMouseEvent } from '@builder.io/qwik';

export const getElementRelativePosition = (
	e: MouseEvent | QwikMouseEvent,
	container: HTMLElement,
	offset: { x: number; y: number } = { x: 0, y: 0 }
): { x: number; y: number } => {
	const boundingRect = container.getBoundingClientRect();

	return {
		x: e.clientX - boundingRect.x - offset.x,
		y: e.clientY - boundingRect.y - offset.y,
	};
};
