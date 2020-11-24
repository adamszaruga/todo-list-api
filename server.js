// default express server stuff
var express = require('express');
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// all the api variables


const todoRoutes = require('./routes')













app.use((req, res, next) => {
    console.log(`Request received: ${req.method} ${req.path}`)
    next();
})



// returns all todo list items
app.use('/api/todos', todoRoutes);

app.get('*', (req, res) => {
    res.status(404).send('Not found');
})

// starts up server
app.listen(3000, function() {
    console.log('Todo List API is now listening on port localhost:3000...');
})