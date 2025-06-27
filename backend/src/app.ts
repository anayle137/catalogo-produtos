import express from 'express';
import router from './routes';

const PORT = 3000;

const app = express();

app.use(express.json());

app.listen(PORT, () => {
  console.log('Server is running on port', PORT);
});

app.use(router);

export default app;
