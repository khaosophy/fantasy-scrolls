const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const colors = require('colors');
const mongoose = require('mongoose');

const spellRouter = require('./routes/spells');

// load environment variables
dotenv.config();
const PORT = process.env.PORT || 5000;
const ENV = process.env.NODE_ENV || 'development';
const MONGO_URI = process.env.MONGO_URI;

// establish database connection
const connectDB = async () => {
  const conn = await mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });

  console.log(colors.cyan.underline.bold(`MongoDB Connected: ${conn.connection.host}`));
}
connectDB();

// initiate app!
const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// set up routes
const API_base = '/api/v1';
app.use(`${API_base}/spells`, spellRouter);

// start the server!
const server = app.listen(PORT,
  console.log(colors.yellow.bold(`Server running in ${ENV} on port ${PORT}`))
);

// handle rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(colors.red(`Error: ${err.message}`));
  server.close(() => process.exit(1));
});