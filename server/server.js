const express = require('express'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  app = express(),
  account = require('./routes/api/account');

// Body Parser Middleware
app.use(bodyParser.json());

// CORS
app.use(cors());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
  .connect(db)
  .then(() => console.log('MongoDB connected ... '))
  .catch(error => console.log(error));

// Use Routes
app.use('/account', account);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));