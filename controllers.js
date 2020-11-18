var todoList = [{
    id: 1,
    todo: "Implement a REST API"
}];

var primaryId = 1;


exports.findAll = (req, res) => {
    if (!todoList.length) {
        next();
    }
    res.send(todoList);
}


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