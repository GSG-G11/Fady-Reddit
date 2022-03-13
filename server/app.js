const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');

const { apiRoute, publicRoute } = require('./routes');
const { notFound, serverError } = require('./controllers');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '..', 'public')));
app.set('port', process.env.PORT || 4000);
app.use(apiRoute);
app.use(publicRoute);
app.use(notFound);
app.use(serverError);
module.exports = app;
