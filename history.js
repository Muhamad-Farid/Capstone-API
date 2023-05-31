const express = require('express');
const app = express();
const PORT = 3000; // You can change the port number if needed

// Define your routes here

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Example history data
const historyData = [
    { id: 1, event: 'Event 1', year: 2000 },
    { id: 2, event: 'Event 2', year: 2005 },
    { id: 3, event: 'Event 3', year: 2010 },
  ];
  
  // GET all history events
  app.get('/api/history', (req, res) => {
    res.json(historyData);
  });
  
  // GET a specific history event by ID
  app.get('/api/history/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const event = historyData.find((event) => event.id === id);
  
    if (event) {
      res.json(event);
    } else {
      res.status(404).json({ message: 'Event not found' });
    }
  });