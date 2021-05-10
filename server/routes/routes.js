const users = [
  {
    id: 1,
    name: '1234',
    email: '1234',
  },
];

const router = app => {
  app.get('/', (request, response) => {
    response.set('Access-Control-Allow-Origin', '*');
    response.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
    response.set('Access-Control-Allow-Headers', 'Content-Type');
    response.send(response.send(users));
  });
  app.post('/login', (request, response) => {
    response.set('Access-Control-Allow-Origin', '*');
    response.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
    response.set('Access-Control-Allow-Headers', 'Content-Type');
    console.log(request);
    response.send(users);
  });
};

module.exports = router;
