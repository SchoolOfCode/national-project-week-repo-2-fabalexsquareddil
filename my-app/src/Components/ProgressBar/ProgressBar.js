export default function ProgressBar({ progress }) {
	const ParentDiv = {
		height: '26px',
		width: '100%',
		backgroundColor: '#D8D7EC',
		borderRadius: '5px',
		position: 'relative',
	};

	const ChildDiv = {
		height: '100%',
		width: `${progress}%`,
		backgroundColor: '#51459F',
		borderBottomLeftRadius: '5px',
		borderTopLeftRadius: '5px',
	};
	const progressText = {
		padding: 10,
		color: 'black',
		fontWeight: 'bold',
		position: 'absolute',
		top: '50%',
		left: '50%',
		zIndex: 99,
		transform: 'translate(-50%, -50%)',
		color: 'white',
	};
	return (
		<div style={ParentDiv}>
			<div style={ChildDiv}></div>
			<span style={progressText}>{`${progress}%`}</span>
		</div>
	);
}
