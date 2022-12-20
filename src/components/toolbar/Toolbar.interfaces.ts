import { Context, PropFunction, QwikMouseEvent } from '@builder.io/qwik';
import {
	INodeMapComponentBase,
	NodeMapState,
} from '../container/NodeMap.interfaces';

export interface ToolbarProps extends INodeMapComponentBase {
	tools: INodeTool[];
}

export interface INodeTool {
	name: string;
	onClick: PropFunction<
		(ev: QwikMouseEvent, context: Context<NodeMapState>) => void
	>;
}
