const path = require('path');

module.exports = (app) => {
  app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
  );

  app.post('/', (req, res) =>
    res.sendFile(path.join(__dirname), '../client/dist/index.html'));

  app.put('/:file', (req, res) => 
  res.sendFile(path.join(__dirname, '../client/dist/index.html')));
};