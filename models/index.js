import query from "../db/index.js";

export async function getAllDays() {
  const data = await query("SELECT * FROM bc_tracker");
  return data.rows;
}

export async function getDayById(id) {
  const data = await query(`SELECT * FROM bc_tracker WHERE id = $1;`,[id]);
  return data.rows;
}


export async function updateTopicsByID(id, updates) {
  //take in the id, take in an updated week/day
  //find the week/day with the id matching what we were given.
  //replace that week/day with the updates
  //return new week/day
  const foundIndex = topics.findIndex(function (topics) {
    return topics.id === id;
  });
  topics[foundIndex] = updates;
  return topics[foundIndex];
}


export async function updateUserByID(id, updatedUser) {
  let userIndex = users.findIndex(function isUseridFound(user){
    return user.id === id;
  })
  return users[userIndex] = updatedUser;
}

