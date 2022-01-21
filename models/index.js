import query from '../db/index.js';

//For GetAll request
export async function getAllDays() {
	const data = await query('SELECT * FROM bc_tracker');
	return data.rows;
}

//For GetById request
export async function getDay(week_day) {
	const data = await query(`SELECT * FROM bc_tracker WHERE week_day = $1;`, [
		week_day,
	]);
	return data.rows;
}

// For PATCH request
export async function updateTopicsByWeekDay(weekDay, updates) {
	const queryString = {
		text: `UPDATE bc_tracker SET topics=$1 WHERE week_day = '${weekDay}' RETURNING *;`,
		values: [JSON.stringify(updates)],
		rowMode: 'array',
	};
	const data = await query(queryString);
}

export async function getWeeklyTopics(week) {
	const data = await query(
		`SELECT * FROM bc_tracker WHERE week_day like 'w${week}d%';`
	);
	return data.rows;
}
