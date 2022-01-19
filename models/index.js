import query from "../db/index.js";

export async function getAllDays() {
  const data = await query("SELECT * FROM bc_tracker");
  return data.rows;
}

export async function getDayById(id) {
  const data = await query(`SELECT [id] FROM bc_tracker`);
  return data.rows;
}

export async function updateTopicsByID(id, updates) {
  //take in the id, take in an updated user
  //find the user with the id matching what we were given.
  //replace that user with the updates
  //return new user
  const foundIndex = topics.findIndex(function (topics) {
    return topics.id === id;
  });
  topics[foundIndex] = updates;
  return topics[foundIndex];
}
