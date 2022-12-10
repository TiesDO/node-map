import { $, QwikMouseEvent } from '@builder.io/qwik';
import { ToobarToolProps } from './toolbar';

export const MoveTool: ToobarToolProps = {
	name: 'move',
	onMouseDown$: $((e: QwikMouseEvent) => {
		const element = e.target as HTMLElement;
		const container = element.closest<HTMLElement>('.nodemap-container');

		if (container === null) {
			return;
		}

		window.onmouseup = () => {
			container.onmousemove = null;
		};

		container.onmousemove = (ev: MouseEvent) => {
			element.style.setProperty(
				'--px',
				`${element.style.left + ev.movementX} px`
			);
			element.style.setProperty(
				'--py',
				`${element.style.top + ev.movementY} px`
			);
		};
	}),
};

export const CreateTool: ToobarToolProps = {
	name: 'create',
	onMouseDown$: $(() => console.log('Create tool used')),
};
