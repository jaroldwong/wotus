const express = require('express');
const app = express();
const workorderRoutes = require('./routes/workorders');

app.get('/', (req, res) => res.send('Hellow World!'));
app.use('/api/workorders', workorderRoutes);

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
