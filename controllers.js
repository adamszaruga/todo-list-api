var todoList = [{
    id: 0,
    todo: "Implement a REST API"
}];

var primaryId = 1;

// FINDS ALL TODO LIST ITEMS AND RETURNS THEM

exports.findAll = (req, res) => {
    if (!todoList.length) {
        next();
    }
    res.send(todoList);
}

// FINDS A SPECIFIC TODO LIST ITEM BY ITS ID

exports.findOne = (req, res) => {
    const id = req.params.id;
    let todo = todoList.find((todo) => {
        return todo.id === Number(id)
    });

    const filter = req.body.filter || [];
    if (filter.length) {
        let newTodo = {};
        filter.forEach((f) => {
            newTodo[f] = todo[f];
        })
        res.status(200).send(newTodo);
    }
    res.status(200).send(todo);
}

// CREATES A NEW TODO ITEM

exports.create = (req, res) => {

    todoList.push({
        id: primaryId,
        todo: req.body.todo
    });
    primaryId++;

    res.status(200).json({
        message: "Todo item created succesfully"
    })
}

// UPDATE AN EXISTING TODO LIST ITEM BY ITS ID

exports.update = (req, res) => {
    const id = Number(req.params.id);
    let todo = todoList.find((t) => {
        return t.id === Number(id)
    });
    let todoIndex = todoList.findIndex((o) => {
        return o === todo;
    })

    todoList.pop(todoIndex);

    todoList.push({
        id: id,
        todo: req.body.todo
    });

    res.status(200).json({
        message: "Todo item updated succesfully"
    })
}

// DELETES A SPECIFIC TODO LIST ITEM BY ITS ID

exports.delete = (req, res) => {
    const id = req.params.id;

    let todo = todoList.find((t) => {
        return t.id === Number(id)
    });

    let todoIndex = todoList.findIndex((o) => {
        return o === todo;
    })

    if (todoIndex > -1) {
        todoList.splice(todoIndex, 1);
    }
    res.status(200).send(todoList);
}