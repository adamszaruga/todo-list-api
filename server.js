var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var todoList = [
    {
        id: 1,
        todo: "Implement a REST API"
    }
];
// Home page
app.get('/', function (request, response, next) {
    response.send('What up')
})
// GET /api/todos
app.get('/api/todos', function (request, response, next) {
    response.send(todoList)
})
// GET /api/todos/:id
app.get('/api/todos/:id', function (request, response, next) {
    //console.log(request.params.id) // this is what you typed into the url to provide the id
    const theUserId = todoList.find(function (user) {
        return user.id.toString() === request.params.id.toString() // must convert to string becuase comparing number to string
    })
    // console.log(request.params)
    response.send(theUserId)
    next()
})
// POST /api/todos
app.post('/api/todos', function (request, response, next) {
    
})
// PUT /api/todos/:id

// DELETE /api/todos/:id

app.listen(3000, function(){
    console.log('Todo List API is now listening on port 3000...');
})