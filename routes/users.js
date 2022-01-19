import express from "express";
const router = express.Router();
import { getAllDays, getDayById } from "../models/index.js";

/* GET users listing. */
router.get("/", async function (req, res, next) {
  const data = await getAllDays();
  res.json({
    message: "I wish we had some information to give you ☹️",
    payload: data,
  });
});

router.get("/:id", async function(req, res, next){
  const data = await getDayById(req.params.id);
  res.json({
    message: "This is all the data for" + req.params.id,
    payload: data,
  });
});






export default router;
