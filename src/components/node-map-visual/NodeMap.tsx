import {
	component$,
	useStyles$,
	useStore,
	createContext,
	useContextProvider,
	Slot,
} from '@builder.io/qwik';
import { ToobarToolProps, Toolbar } from '../toolbar/toolbar';
import { CreateTool, MoveTool } from '../toolbar/prefab-tools';
import mainStyle from './nodemap.css?inline';

export const NodeMapContext = createContext<NodeMapState>('nodemap');

export type NodeMapState = {
	gridSize: number;
	mapBackground: string;
	gridColor: string;

	activeTool: ToobarToolProps | null;
};

export const NodeMapSettingsDefault: NodeMapState = {
	gridSize: 20,
	mapBackground: '#333',
	gridColor: '#555',

	activeTool: null,
};

export const NodeMap = component$(() => {
	useStyles$(mainStyle);

	// set store to default
	const mapState = useStore<NodeMapState>(NodeMapSettingsDefault);

	// provide context to all children
	useContextProvider(NodeMapContext, mapState);

	return (
		<div
			class='nodemap-container'
			style={{
				'--bgc': mapState.mapBackground,
				'--gc': mapState.gridColor,
				'--gs': `${mapState.gridSize}px`,
			}}>
			<DraggableNode snapToGrid={false} dragTargetId='dragPoint'>
				<Toolbar tools={[MoveTool, CreateTool]} />
			</DraggableNode>
		</div>
	);
});

export type DraggableNodeProps = {
	dragTargetId?: string;
	snapToGrid: boolean;
};

export const DraggableNode = component$((props: DraggableNodeProps) => {
	return (
		<div
			onClick$={(e) => {
				console.log('draggable item was clicked');

				const element: HTMLElement = e.target as HTMLElement;
				if (props.dragTargetId === element.id) {
					console.log('clicked target element');
				}
			}}>
			<Slot />
		</div>
	);
});
