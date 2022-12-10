import { $, QwikMouseEvent } from '@builder.io/qwik';
import { TextNodeProps } from '../node-map-visual/Node';
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

		// offset on node
		const nodeRect = element.getBoundingClientRect();

		const nodeOffset = {
			x: nodeRect.x - e.clientX,
			y: nodeRect.y - e.clientY,
		};

		window.onmouseup = () => {
			container.onmousemove = null;
		};

		container.onmousemove = (ev: MouseEvent) => {
			const conRect = canvas.getBoundingClientRect();

			element.style.left = ev.clientX - conRect.x + nodeOffset.x + 'px';
			element.style.top = ev.clientY - conRect.y + nodeOffset.y + 'px';
		};
	}),
};

export const CreateTool: ToobarToolProps = {
	name: 'create',
	onMouseDown$: $((e: QwikMouseEvent) => {
		// create a new node
		const tempNodeProps: TextNodeProps = {
			text: 'new Node',
			id: 'newNode',
		};

		const canvas = e.target as HTMLDivElement;
	}),
};
