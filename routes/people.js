import express from 'express';
import axios from '../utils/axios.js';

const router = express.Router();

router.get('/', async (req, res) => {
	const { page } = req.query;
	try {
		const result = await axios.get(`/people?page=${page}`);
		res.json(result.data);
	} catch (err) {
		console.log(err);
		res.send(err);
	}
});

router.get('/search', async (req, res) => {
	try {
		const { name } = req.query;
		const result = await axios.get(`/people?search=${name}`);
		res.json(result.data);
	} catch (err) {
		console.log(err);
		res.send(err);
	}
});

export default router;
