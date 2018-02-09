import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import helmet from 'helmet';

const app = express();

app.use(helmet());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', (req, res) => {
  res.json({ status: 'Ok' });
});

app.listen(3333, () => {
  console.log('Server listening...');
});

export default app;
