const app = require('./app');

const port = app.get('port');
app.listen(port, () => {
  console.log('listening at http://localhost:4000');
});
