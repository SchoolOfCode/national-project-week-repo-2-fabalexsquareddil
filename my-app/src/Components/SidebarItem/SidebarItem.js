import { useState } from 'react';
import Days from '../Days/Days';
import './SidebarItem.css';
export default function SidebarItem({ week, setWeek, setDay }) {
	let [isAccordionExpanded, setIsAccordionExpanded] = useState(false);
	function accordionClickHandler() {
		setIsAccordionExpanded(!isAccordionExpanded);
	}
	return (
		<div>
			<li className='sidebar-item' onClick={accordionClickHandler}>
				Week {week}
			</li>
			{isAccordionExpanded ? (
				<Days setWeek={setWeek} setDay={setDay} />
			) : null}
		</div>
	);
}
