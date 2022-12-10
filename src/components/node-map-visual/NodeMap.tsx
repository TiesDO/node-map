import {
	component$,
	useStyles$,
	useStore,
	createContext,
	useContextProvider,
	$,
	QwikMouseEvent,
} from '@builder.io/qwik';
import { ToobarToolProps, Toolbar } from '../toolbar/toolbar';
import { CreateTool, MoveTool } from '../toolbar/prefab-tools';
import mainStyle from './nodemap.css?inline';
import { TextNode, TextNodeProps } from './Node';
import { NodePropertiesEditor } from './NodePropertiesEditor';

export const NodeMapContext = createContext<NodeMapState>('nodemap');

export type NodeMapState = {
	gridSize: number;
	mapBackground: string;
	gridColor: string;

	activeTool: ToobarToolProps | null;

	nodes: TextNodeProps[];

	selection: TextNodeProps[];
};

export const NodeMapSettingsDefault: NodeMapState = {
	gridSize: 20,
	mapBackground: '#333',
	gridColor: '#555',

	activeTool: null,

	nodes: [],
	selection: [],
};

export const NodeMap = component$(() => {
	useStyles$(mainStyle);

	// set store to default
	const mapState = useStore<NodeMapState>(NodeMapSettingsDefault, {
		recursive: true,
	});

	// provide context to all children
	useContextProvider(NodeMapContext, mapState);

	const styleVariables = {
		'--bgc': mapState.mapBackground,
		'--gc': mapState.gridColor,
		'--gs': `${mapState.gridSize}px`,
	};

	const eventMap = {
		onMouseDown$: $((e: QwikMouseEvent) => {
			if (mapState.activeTool?.onMouseDown$) {
				mapState.activeTool?.onMouseDown$(e, mapState);
			}
		}),
	};

	return (
		<div class='nodemap-container'>
			<Toolbar tools={[MoveTool, CreateTool]} />

			<div class='nodemap-canvas' {...eventMap} style={styleVariables}>
				{mapState.nodes.map((n) => {
					return <TextNode {...n} />;
				})}
			</div>

			<NodePropertiesEditor />
		</div>
	);
});
