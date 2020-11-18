const express = require('express');
const router = express.Router();

const controller = require('./controllers');

// GET /api/todos

router.get('/', controller.findAll)

// GET /api/todos/:id

router.get('/:id', controller.findOne)

// POST /api/todos

router.post('/', controller.create)

// PUT /api/todos/:id

router.put('/:id', controller.update)

// DELETE /api/todos/:id

router.delete('/:id', controller.delete)

module.exports = router;