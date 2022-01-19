import express from "express";
const router = express.Router();
import { getAllDays, getDayById } from "../models/index.js";

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
router.get("/:id", async function (req, res, next) {
  const data = await getDayById(req.params.id);
  res.json({
    message: "This is all the data for" + req.params.id,
    payload: data,
  });
});



export default router;
