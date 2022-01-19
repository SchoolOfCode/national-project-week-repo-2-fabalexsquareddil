import query from "../db/index.js";

//For GetAll request
export async function getAllDays() {
  const data = await query("SELECT * FROM bc_tracker");
  return data.rows;
}

//For GetById request
export async function getDay(week_day) {
  const data = await query(`SELECT * FROM bc_tracker WHERE week_day = $1;`, [week_day]);
  return data.rows;
}

// For PATCH request
export async function updateTopicsByID(id, updates) {
  const foundIndex = await query(
  Update tableName SET topic = '{id:1, week: 1, day:1, topic: "hello", completed: false}' WHERE week_day = req.params.week_day)
  topics.findIndex(function (topics) {
    return topics.id === id;
  });
  topics[foundIndex] = updates;
  return topics[foundIndex];
}


// export async function updateUserByID(id, updatedUser) {
//   let userIndex = users.findIndex(function isUseridFound(user){
//     return user.id === id;
//   })
//   return users[userIndex] = updatedUser;
// }
