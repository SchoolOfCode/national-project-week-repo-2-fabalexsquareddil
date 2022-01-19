import express from "express";
const router = express.Router();
import { getAllDays, getDay, updateTopicsByID} from "../models/index.js";

// router.get('/', (req, res)=>{
//   res.send("Welcome to your server")
//   })

// Get all days returned
router.get("/", async function (req, res, next) {
  const data = await getAllDays();
  res.json({
    message: "We now have some information to give you",
    payload: data,
  });
});

//Get individual day's data
router.get("/:week_day", async function (req, res, next) {
  const data = await getDay(req.params.week_day);
  res.json({
    message: "This is all the data for " + req.params.week_day,
    payload: data,
  });
});


router.patch("/topics", async function (req, res, next) {
  const data = await updateTopicsByID(req.params.topic);
  res.json({
    message: "This returns the updated data" + req.params.topic,
    payload: data,
  }); 
});
export default router;