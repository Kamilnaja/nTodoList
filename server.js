var express = require('express');
var app = express();
var iTodoList = require('./iTodoList');
var iTodo = require('./iTodo');
var TodoList = /** @class */ (function () {
    function TodoList() {
        this.todoList = [];
    }
    TodoList.prototype.addTodo = function (todo) {
        this.todoList.push(todo);
        this.displayTodos();
    };
    TodoList.prototype.saveTodo = function () {
    };
    TodoList.prototype.displayTodos = function () {
        this.todoList.forEach(function (item) {
            console.log(item);
        });
        return todoList;
    };
    return TodoList;
}());
var todoList = new TodoList();
app.post('/todo/:content', function (req, res) {
    var content = req.params.content;
    console.log(content);
    todoList.addTodo({
        id: 11,
        content: 'First'
    });
    res.send('dodano');
});
app.get('/todo', function (req, res) {
    res.send(todoList.displayTodos());
    console.log('data displayed');
});
app.listen(3000, function () {
    "Listening on 3000";
});
