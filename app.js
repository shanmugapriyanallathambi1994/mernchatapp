const express = require('express');
const app = express();

const userReg = require('./Routes/userRoutes');
app.use(express.json());
app.use('/api/user', userReg);

module.exports = app;