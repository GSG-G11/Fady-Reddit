const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');

const router = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '..', 'public')));
app.set('port', process.env.PORT || 4000);
app.use(router);
module.exports = app;
