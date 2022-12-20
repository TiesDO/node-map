import { INodeMapComponentBase } from '../container/NodeMap.interfaces';

export interface PropertyEditorProps extends INodeMapComponentBase {}

export interface PropertiesEditorState {
	currentNodeId?: string;
	currentNode?: any;
	properties?: INodeProperty[];
}

export interface INodeProperty {
	identifier: string;
}
