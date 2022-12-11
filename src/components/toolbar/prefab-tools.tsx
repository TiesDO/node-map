import { $, QwikMouseEvent } from '@builder.io/qwik';
import { getElementRelativePosition } from '../library/math';
import { TextNodeProps } from '../node-map-visual/Node';
import { NodeMapState } from '../node-map-visual/NodeMap';
import { ToobarToolProps } from './toolbar';

import { v4 } from 'uuid';

export const MoveTool: ToobarToolProps = {
	name: 'move',
	onMouseDown$: $((e: QwikMouseEvent) => {
		//#region start

		const dragStartThreshold: number = 5;

		const element = e.target as HTMLElement;

		// check if event target is a node
		if (!element.classList.contains('node')) {
			return;
		}

		// find the canvas
		const canvas = element.closest<HTMLElement>('.nodemap-canvas');

		if (canvas === null || canvas === null) {
			return;
		}

		//#endregion

		//#region Dragging logic

		const startDrag = () => {
			const nodeOffset = getElementRelativePosition(e, element);
			window.onmouseup = () => {
				canvas.onmousemove = null;
			};

			canvas.onmousemove = (ev: MouseEvent) => {
				const nextPosition = getElementRelativePosition(ev, canvas, nodeOffset);

				element.style.left = nextPosition.x + 'px';
				element.style.top = nextPosition.y + 'px';
			};
		};

		//#endregion

		// check if the user moves
		const initialClickPos = { x: e.clientX, y: e.clientY };

		element.onmousemove = (ev: MouseEvent) => {
			const delta = {
				x: Math.abs(initialClickPos.x - ev.clientX),
				y: Math.abs(initialClickPos.y - ev.clientY),
			};

			if (delta.x + delta.y > dragStartThreshold) {
				startDrag();
				element.onmousemove = null;
			}
		};

		element.onmouseup = () => {
			element.onmousemove = null;
		};
	}),
};

export const CreateTool: ToobarToolProps = {
	name: 'create',
	onMouseDown$: $((e: QwikMouseEvent, state: NodeMapState) => {
		const canvas = (e.target as HTMLElement).closest<HTMLElement>(
			'.nodemap-canvas'
		);

		if (!canvas) return;

		const placementPos = getElementRelativePosition(e, canvas);

		// create a new node
		const tempNodeProps: TextNodeProps = {
			text: 'new Node',
			id: v4(),
			x: placementPos.x,
			y: placementPos.y,
		};

		// add node to context
		state.nodes.push(tempNodeProps);
	}),
};
