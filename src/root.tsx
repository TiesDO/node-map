import { createContext, useContext } from '@builder.io/qwik';
import { NodeCanvas } from './components/canvas/NodeCanvas';
import { NodeMap } from './components/container/NodeMap';
import { NodeMapState } from './components/container/NodeMap.interfaces';
import { NodeBox } from './components/nodebox/NodeBox';
import { PropertyEditor } from './components/prop-editor/PropertyEditor';

export default () => {
	// Create a context of the NodeMapState type
	const NodeMapContext = createContext<NodeMapState>('mySampleContext');

	return (
		<>
			<head>
				<meta charSet='utf-8' />
				<title>Qwik Blank App</title>
			</head>
			<body style='width: 100vw; height: 100vh; margin: 0'>
				{/* Configure the node map with all the components you wish to display */}

				<NodeMap context={NodeMapContext}>
					<NodeBox context={NodeMapContext} />
					<PropertyEditor context={NodeMapContext} />
					<NodeCanvas context={NodeMapContext} />
				</NodeMap>
			</body>
		</>
	);
};
