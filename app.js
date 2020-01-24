const express = require('express');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const path = require('path');

const port = 3001;
const app = express();

app.use(morgan('tiny'));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/jns', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist/')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/', '/index.html/'));
});

app.listen(port, () => {
  debug(`Server listening on ${chalk.green(port)}`);
});
