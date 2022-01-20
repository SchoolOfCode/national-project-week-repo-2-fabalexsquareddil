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
	console.log('GET REQUEST DATA: ', data);
	return data.rows;
}

// For PATCH request
export async function updateTopicsByWeekDay(weekDay, updates) {
	console.log('Updates: ', updates);
	const queryString = {
		text: `UPDATE bc_tracker SET topics=$1 WHERE week_day = '${weekDay}' RETURNING *;`,
		values: [JSON.stringify(updates)],
		rowMode: 'array',
	};
	const data = await query(queryString);
	console.log('QUERY RETURNS: ', data);

	// topics.findIndex(function (topics) {
	//   return topics.id === id;
	// });
	// topics[foundIndex] = updates;
	// return topics[foundIndex];
}

// export async function updateUserByID(id, updatedUser) {
//   let userIndex = users.findIndex(function isUseridFound(user){
//     return user.id === id;
//   })
//   return users[userIndex] = updatedUser;
// }
