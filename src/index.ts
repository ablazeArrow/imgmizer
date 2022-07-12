import express from 'express';
import router from './routes/rootRoute';

const app = express();
export const port = 4321;

app.use(express.static('public'));
app.use(express.static('assets/thumb'));
app.use('/', router);

app.listen(port, () =>
  console.log(`Navigate to localhost:${port} in your browser to begin`)
);

export default app;
