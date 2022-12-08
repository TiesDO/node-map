import { MapVisual } from './components/node-map-visual/mapVisual';

export default () => {
	return (
		<>
			<head>
				<meta charSet='utf-8' />
				<title>Qwik Blank App</title>
			</head>
			<body style='width: 200px; height: 200px'>
				<MapVisual />
			</body>
		</>
	);
};
