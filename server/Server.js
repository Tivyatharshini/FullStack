// server.js
const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;


// Middleware
app.use(cors());
app.use(express.json());


// GET endpoint
app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello, this is data from the server!' });
});


// POST endpoint
app.post('/api/data', (req, res) => {
  const { message, age } = req.body;
  console.log('Received message:', message);
  console.log('Received age:', age);
  res.json({ message: `Received: ${message}`, age: Number(age) });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
