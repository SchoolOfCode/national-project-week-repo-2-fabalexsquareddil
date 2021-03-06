import express from 'express';
const router = express.Router();
import {
	getAllDays,
	getDay,
	updateTopicsByWeekDay,
	getWeeklyTopics,
} from '../models/index.js';

// router.get('/', (req, res)=>{
//   res.send("Welcome to your server")
//   })

// Get all days returned
router.get('/', async function (req, res, next) {
	const data = await getAllDays();
	res.json({
		message: 'We now have some information to give you',
		payload: data,
	});
});

//Get individual day's data
router.get('/:week_day', async function (req, res, next) {
	const data = await getDay(req.params.week_day);
	if (data[0].topics) {
		data[0].topics = JSON.parse(data[0].topics);
	}

	res.json({
		message: 'This is all the data for ' + req.params.week_day,
		payload: data,
	});
});

router.get('/weekly/:week', async function (req, res) {
	const data = await getWeeklyTopics(req.params.week);
	console.log(data);
	res.json({
		message: 'This is all the weekly data for week ' + req.params.week,
		payload: data,
	});
});

router.patch('/:weekDay', async function (req, res, next) {
	const data = await updateTopicsByWeekDay(req.params.weekDay, req.body);

	res.json({
		message: 'This returns the updated data' + req.params.weekDay,
		payload: { data: data, body: req.body },
	});
});
export default router;
