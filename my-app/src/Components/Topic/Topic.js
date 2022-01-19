export default function Topic({ topic }) {
	console.log(topic);
	function handleClick() {}
	return (
		<li>
			<input
				id='topic'
				type='checkbox'
				defaultChecked={topic ? topic.completed : false}
			></input>
			<label>{topic ? topic.content : null}</label>
		</li>
	);
}
