const express = require('express');
const router = express.Router();

const controller = require('./controllers');

// GET /api/todos

router.get('/', controller.findAll)

// GET /api/todos/:id

router.get('/:id', controller.findOne)

// POST /api/todos

// PUT /api/todos/:id

// DELETE /api/todos/:id

module.exports = router;