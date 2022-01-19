import SidebarItem from '../SidebarItem/SidebarItem';

import './Sidebar.css';
export default function Sidebar({ setDay, setWeek }) {
	const weeks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
	return (
		<div className='sidebar'>
			<ul>
				{weeks.map((el) => (
					<SidebarItem
						setDay={setDay}
						setWeek={setWeek}
						week={el}
						key={el}
					/>
				))}
			</ul>
		</div>
	);
}
