const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const indexRouter = require('./routes/index');

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use('/', indexRouter);

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});