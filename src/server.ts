import express, { json } from 'express';

const app = express();

app.get('/users', (req, res) => {
  res.send('Hello World');
});

app.listen(3333, () => {
  console.log('server is running');
});
