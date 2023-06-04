// routes/history.js

const express = require('express');
const router = express.Router();

// Variabel history dengan data awal
let history = [
    { id: 1, title: 'History 1', description: 'Deskripsi history 1' },
    { id: 2, title: 'History 2', description: 'Deskripsi history 2' },
    { id: 3, title: 'History 3', description: 'Deskripsi history 3' }
];

// Route untuk mendapatkan semua history
router.get('/', (req, res) => {
    res.json(history);
});

// Route untuk mendapatkan detail history berdasarkan ID
router.get('/:id', (req, res) => {
    const historyId = parseInt(req.params.id);
    const foundHistory = history.find((item) => item.id === historyId);

    if (foundHistory) {
        res.json(foundHistory);
    } else {
        res.status(404).json({ message: 'History not found' });
    }
});

// Route untuk menambahkan history
router.post('/', (req, res) => {
    const newHistory = req.body;
    const newId = history.length + 1;
    newHistory.id = newId;
    history.push(newHistory);
    res.status(201).json(newHistory);
});

module.exports = router;
