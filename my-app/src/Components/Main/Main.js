import './Main.css';
import ProgressBar from '../ProgressBar/ProgressBar';
import TopicList from '../TopicList/TopicList';
import { useState } from 'react';
export default function Main({ week, day }) {
	let [input, setInput] = useState('');
	let [topics, setTopics] = useState([]);

	function submitHandler(e) {
		e.preventDefault();
		const topic = {
			week: week,
			day: day,
			content: input,
			completed: false,
		};
		const newTopics = [...topics, topic];
		setTopics(newTopics);
	}
	return (
		<div className='main'>
			<div className='main-content'>
				<h1>School of Code Bootcamp Progress</h1>
				<div className='main-content-data'>
					<div className='progress-section'>
						<h2>Week {week}</h2>
						<ProgressBar progress={50} />
					</div>
					<div className='day-input'>
						<h3>Day {day}</h3>
						<form onSubmit={submitHandler} className='topicInput'>
							<input
								onChange={(e) => setInput(e.target.value)}
								type='text'
							/>
						</form>
					</div>
					<TopicList topics={topics} />
				</div>
			</div>
		</div>
	);
}
