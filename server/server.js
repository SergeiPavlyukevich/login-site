const express = require('express');
const port = 8000;
const routes = require('./routes/routes');
const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);

routes(app);

app.options('*', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Headers', 'Content-Type');
  res.send('ok');
});

const server = app.listen(port, error => {
  if (error) return console.log(`Error: ${error}`);

  console.log(`Server listening on port ${server.address().port}`);
});
