import query from "../db/index.js";

//For GetAll request
export async function getAllDays() {
  const data = await query("SELECT * FROM bc_tracker");
  return data.rows;
}

//For GetById request
export async function getDayById(id) {
  const data = await query(`SELECT * FROM bc_tracker WHERE id = $1;`, [id]);
  return data.rows;
}

// For PATCH request
export async function updateTopicsByID(id, updates) {
  const foundIndex = topics.findIndex(function (topics) {
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
