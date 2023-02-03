const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = 3000;

// Logging middleware
app.use(morgan('dev'));

// Body-parsing middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Static file serving middleware
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Server listening on localhost:${port}`);
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error");
});