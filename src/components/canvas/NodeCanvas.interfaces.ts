import { INodeColorScheme } from '../base-node/Node.interfaces';
import { INodeMapComponentBase } from '../container/NodeMap.interfaces';
import { Vector2 } from '../lib/math';

export interface NodeCanvasProps extends INodeMapComponentBase {
	nodeBaseStyle?: INodeColorScheme;

	gridSize?: Vector2;
}
