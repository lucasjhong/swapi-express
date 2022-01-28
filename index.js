import express from 'express';
import cors from 'cors';
// import bodyParser from 'body-parser';

import peopleRoutes from './routes/people.js';
import planetRoutes from './routes/planets.js';
import starshipRoutes from './routes/starships.js';

const app = express();
const PORT = 5000;

app.use(cors());

app.use('/people', peopleRoutes);
app.use('/planets', planetRoutes);
app.use('/starships', starshipRoutes);

app.listen(PORT, () => {
	console.log(`server running on port ${PORT}`);
});
