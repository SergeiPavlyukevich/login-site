const users = [
  {
    id: 1,
    name: '1234',
    email: '1234',
  },
  {
    id: 2,
    name: 'Bertram Gilfoyle',
    email: 'gilfoyle@piedpiper.com',
  },
];

const router = app => {
  app.get('/', (request, response) => {
    response.send(response.send(users));
  });
  app.post('/login', (request, response) => {
    console.log(request);
    response.send(users);
  });
};

module.exports = router;
