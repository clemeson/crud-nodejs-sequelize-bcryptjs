const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const app = express();
const Router = require('./routes')



app.use(morgan('tiny'));
app.use(helmet());
app.use(express.json());

app.use('/', Router)





module.exports = app;