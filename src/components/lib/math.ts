import { QwikMouseEvent } from '@builder.io/qwik';

export const getElementRelativePosition = (
	e: MouseEvent | QwikMouseEvent,
	container: HTMLElement,
	offset: Vector2 = { x: 0, y: 0 }
): Vector2 => {
	const boundingRect = container.getBoundingClientRect();

	return {
		x: e.clientX - boundingRect.x - offset.x,
		y: e.clientY - boundingRect.y - offset.y,
	};
};

export interface Vector2 {
	x: number;
	y: number;
}
