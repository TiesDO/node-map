import { Context } from '@builder.io/qwik';
import { BaseNodeProps } from '../base-node/Node.interfaces';
/**
 * State that is shared with all components, can be created outside of the nodemap to access these in other higher level components
 */
export interface NodeMapState {
	nodes: BaseNodeProps[];

	currentSelected: string | null;
	selected: string[];
}

export const NodeMapStateDefault: NodeMapState = {
	nodes: [],
	currentSelected: null,
	selected: [],
};

export interface INodeMapComponentBase {
	context: Context<NodeMapState>;
}

export interface NodeMapProps extends INodeMapComponentBase {
	initialState?: NodeMapState;
}
