import { NodeMap } from './components/node-map-visual/NodeMap';

export default () => {
	return (
		<>
			<head>
				<meta charSet='utf-8' />
				<title>Qwik Blank App</title>
			</head>
			<body style='width: 100vw; height: 100vh; margin: 0'>
				<NodeMap />
			</body>
		</>
	);
};
