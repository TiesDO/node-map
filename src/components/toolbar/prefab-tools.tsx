import { $, QwikMouseEvent } from '@builder.io/qwik';
import { getElementRelativePosition } from '../library/math';
import { TextNodeProps } from '../node-map-visual/Node';
import { NodeMapState } from '../node-map-visual/NodeMap';
import { ToobarToolProps } from './toolbar';

export const MoveTool: ToobarToolProps = {
	name: 'move',
	onMouseDown$: $((e: QwikMouseEvent) => {
		const element = e.target as HTMLElement;

		// check if it is a node
		if (!element.classList.contains('node')) {
			return;
		}

		const container = element.closest<HTMLElement>('.nodemap-container');
		const canvas = element.closest<HTMLElement>('.nodemap-canvas');

		if (container === null || canvas === null) {
			return;
		}

		const nodeOffset = getElementRelativePosition(e, element);
		window.onmouseup = () => {
			container.onmousemove = null;
		};

		container.onmousemove = (ev: MouseEvent) => {
			const nextPosition = getElementRelativePosition(ev, canvas, nodeOffset);

			element.style.left = nextPosition.x + 'px';
			element.style.top = nextPosition.y + 'px';
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
			id: 'newNode',
			x: placementPos.x,
			y: placementPos.y,
		};

		state.nodes.push(tempNodeProps);

		console.log(tempNodeProps);
	}),
};
