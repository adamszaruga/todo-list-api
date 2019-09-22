var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Static server
app.use(express.static(__dirname + '/public'))

var todoList = [
    {
        id: 1,
        todo: "Walk the dog"
    },
    {
        id: 2,
        todo: "Finish node exercises"
    },
    {
        id: 3,
        todo: "Wash the dishes"
    }
];

// GET /
app.get('/', function (request, response, next) {
    response.send('Visit localhost:3000/api/todos for my todo list')
})
// GET /api/todos
app.get('/api/todos', function (request, response, next) {
    response.send(todoList)
})
// GET /api/todos/:id
app.get('/api/todos/:id', function (request, response, next) {
    //console.log(request.params.id) // this is what you typed into the url to provide the id
    const itemId = todoList.find(function (item) {
        // the below returns the matching results which are filtered from the original array and returned
        return item.id === parseInt(request.params.id) // must convert to string becuase comparing number to string
    })
    if (!itemId) {
        return response.status(404).send('The item you entered can not be found!')
    }
    // console.log(request.params)
    response.send(itemId)
    //next()
})
// POST /api/todos
app.post('/api/todos', function (request, response, next) {
    // we are manually typing the item below becuase we dont have a server yet
    // the new key/value is included in the body of the request
    const newItem = {
        id: todoList.length + 1,
        todo: request.body.todo // this utilizes the request body which is in JSON format with a key of todo
    }
    todoList.push(newItem) // push the new item to the existing list
    response.send(todoList) // send the new item with id and todo in JSON format
})
// PUT /api/todos/:id
app.put('/api/todos/:id', function (request, response, next) {
    // look up the item id
    // if it does not exist, return 404
    // validate input
    // if invalid, return 400 (bad request)
    // update todo item
    // return the updated item
    const itemId = todoList.find(function (item) {
        return item.id === parseInt(request.params.id)
    })
    if (!itemId) {
        return response.status(404).send('The item you entered can not be found!')
    }
    itemId.todo = request.body.todo//parseInt(request.body.id)
    response.send(todoList)
})

// DELETE /api/todos/:id
app.delete('/api/todos/:id', function (request, response, next) {
    const itemId = todoList.find(function (item) {
        return item.id === parseInt(request.params.id)
    })
    if (!itemId) {
        return response.status(404).send('The item you entered can not be found!')
    }
    const index = todoList.indexOf(itemId)
    todoList.splice(index, 1)
    response.send(itemId)
})

// LISTEN port 3000
app.listen(3000, function(){
    console.log('Todo List API is now listening on port 3000...');
})