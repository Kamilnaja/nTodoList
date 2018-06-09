var express = require('express');
var app = express();
var iTodoList = require('./iTodoList');
var iTodo = require('./iTodo');
var TodoList = /** @class */ (function () {
    function TodoList() {
        this.idOfTodo = 0;
        this.todoList = [{
                id: 1,
                content: "super"
            },
            {
                id: 2,
                content: 'lorem'
            }];
    }
    TodoList.prototype.addTodo = function (todo) {
        todo.id = this.idOfTodo;
        this.todoList.push(todo);
        this.idOfTodo++;
        this.displayTodos();
    };
    TodoList.prototype.saveTodo = function () {
    };
    TodoList.prototype.deleteTodo = function (idToDelete) {
        for (var index = 0; index < this.todoList.length; index++) {
            var element = this.todoList[index];
            if (element.id == idToDelete) {
                this.todoList.splice(idToDelete - 1, 1);
            }
        }
        this.displayTodos();
    };
    TodoList.prototype.editTodo = function (todo) {
        for (var index = 0; index < this.todoList.length; index++) {
            var element = this.todoList[index];
            if (element.id == todo.id) {
                element.content = todo.content;
            }
        }
        this.displayTodos();
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
    todoList.addTodo({
        content: content
    });
    res.send(todoList.displayTodos());
});
app.get('/todo', function (req, res) {
    res.send(todoList.displayTodos());
});
app.put('/todo', function (req, res) {
    var todo = {
        content: req.params.content,
        id: req.params.content
    };
    todoList.editTodo(todo);
});
app["delete"]('/todo/:id', function (req, res) {
    var id = req.params.id;
    todoList.deleteTodo(id);
    res.send("I delete item with id : " + id);
});
app.listen(3000, function () {
    "Listening on 3000";
});
