import express from 'express';
import cors from 'cors';

const app = express();
const port = 3003;

app.use(cors());

let count = 0;

app.get('/', (request, response) => {
  response.send(String(count));
});

app.get('/increment', (request, response) => {
  count = count + 1;
  setTimeout(() => {
    response.send(String(count));
  }, 1000);
});

app.get('/decrement', (request, response) => {
  count = count - 1;

  setTimeout(() => {
    response.send(String(count));
  }, 2000);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
