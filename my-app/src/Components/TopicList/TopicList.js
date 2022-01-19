import Topic from '../Topic/Topic';

export default function TopicList({ topics }) {
	console.log(topics);
	return (
		<div className='topic-list'>
			<h3>Topics</h3>
			<ul>
				{topics.map((el, index) => (
					<Topic topic={el} key={index} />
				))}
				<Topic />
			</ul>
		</div>
	);
}
