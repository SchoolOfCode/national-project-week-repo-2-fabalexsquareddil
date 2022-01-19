import React from 'react';
import './Days.css';
export default function Days({ setDay, setWeek }) {
	function handleDayClick(e) {
		const week =
			e.target.parentElement.parentElement.children[0].textContent.replace(
				'Week ',
				''
			);
		const day = e.target.textContent.replace('Day ', '');
		setDay(day);
		setWeek(week);
	}
	return (
		<ul className='sidebar-submenu'>
			<li onClick={handleDayClick}>Day 1</li>
			<li onClick={handleDayClick}>Day 2</li>
			<li onClick={handleDayClick}>Day 3</li>
			<li onClick={handleDayClick}>Day 4</li>
			<li onClick={handleDayClick}>Day 5</li>
		</ul>
	);
}
