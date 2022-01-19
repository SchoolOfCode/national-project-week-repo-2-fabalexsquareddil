import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Main from './Components/Main/Main';
import { useState } from 'react';

function App() {
	let [day, setDay] = useState(1);
	let [week, setWeek] = useState(1);
	return (
		<div className='App'>
			<header className='App-header'>
				<Sidebar setDay={setDay} setWeek={setWeek} />
				<Main week={week} day={day} />
			</header>
		</div>
	);
}

export default App;
