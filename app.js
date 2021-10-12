const express = require('express');

const {sequelize} = require('./db');
const {Sauce} = require('./models');
const routes = require('./routes');

const PORT = process.env.PORT || 3000;

const app = express();

app.use('/', routes);