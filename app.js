const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res
    .status(200)
    .json({ message: 'Hello form the server side', app: 'Natours' });
});

app.post('/', (req, res) => {
  res.send('You can now post!!!');
});

const port = 3000;
app.listen(port, () => {
  console.log(`App is running on ${port}...`);
});
