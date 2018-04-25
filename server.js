require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');

// MongoDB setup
mongoose.connect(process.env.DB_URI);

// Middleware
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' }));

app.use('/api/workorders', require('./routes/workorders'));

app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

// Error-handling
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Running on port ${PORT}`));
