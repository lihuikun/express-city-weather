require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const indexRouter = require('./routes/index');
const weatherRouter = require('./routes/weather');
const wallpapersRouter = require('./routes/pexels');
const { specs, swaggerUi } = require('./swagger');

const app = express();
const port = process.env.PORT || 3000;
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use('/', indexRouter);
app.use('/weather', weatherRouter);
app.use('/wallpapers', wallpapersRouter);
// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});