var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var primaryId = 1;
var todoList = [
    {
        id: primaryId,
        todo: "Implement a REST API"
    }
];


// GET /api/todos
app.get('/todos', (req,res) => {
    res.status(200).send(todoList);
})

// GET /api/todos/:id
app.get('/todos/:id', (req,res) => {
    const id = req.params.id;
    
    let todo = todoList.find((currentTodo) => {
        return currentTodo.id == id
    })

    res.status(200).send(todo);
})
// POST /api/todos
app.post('/todos', (req,res) => {
    primaryId++;
    todoList.push({
        id: primaryId,
        todo: "Implement a REST API"
    })
    
    res.status(200).send("Api Implemented succesfully");
})

// PUT /api/todos/:id
app.put('/todos/:id', (req, res) => {
    let todo = req.params.todo;
    const id = req.params.id;
   
    let todoItem = todoList.find((currentTodo) => {
        return currentTodo.id == id; 
    })
    todoItem.todo = todo;
    res.status(200).send();
})

// DELETE /api/todos/:id
app.delete('/todos/:id', (req, res) => {
    const id = req.params.id;

    let todo = todoList.find((currentTodo) => {
        return currentTodo.id == id;
    })

    let todoIndex = todoList.findIndex((currentIndex) => {
        return currentIndex == todo
    })

    if (todoIndex > -1){
        todoList.splice(todoIndex, 1)
    }
    res.status(200).send(todoList);
})

app.listen(3000, function(){
    console.log('Todo List API is now listening on port 3000...');
})