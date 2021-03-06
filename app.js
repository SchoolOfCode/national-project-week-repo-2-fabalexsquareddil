import express from 'express';
import path from 'path';

import __dirname from './dirname.js';
import cors from 'cors';
import logger from 'morgan';

import usersRouter from './routes/users.js';

const app = express();

// app.get('/', (req, res)=>{
//   res.send("Welcome to your server")
//   })

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/users', usersRouter);

app.use(function (req, res, next) {
	res.status(404).json({
		message: "We couldn't find what you were looking for 😞",
	});
});

app.use(function (err, req, res, next) {
	console.error(err.stack);
	res.status(500).json(err);
});

export default app;
