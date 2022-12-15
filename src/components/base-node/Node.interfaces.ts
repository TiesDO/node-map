import { Vector2 } from '../lib/math';

export interface BaseNodeProps {
	id: string;
	editable: string[];

	meta: INodeMeta;

	position: Vector2;

	styles: INodeColorScheme;
}

export interface INodeMeta {
	text: string;
}

export interface INodeColorScheme {
	nodeBackgroundColor: string;
	nodeFontColor: string;
	nodeBorderColor: string;
}
