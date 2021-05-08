const express = require('express');
const port = 3002;
const routes = require('./routes/routes');
const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);

routes(app);

const server = app.listen(port, error => {
  if (error) return console.log(`Error: ${error}`);

  console.log(`Server listening on port ${server.address().port}`);
});
