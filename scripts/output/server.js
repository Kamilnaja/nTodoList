"use strict";
const express = require('express');
const app = express();
const iTodoList = require('./iTodoList');
const iTodo = require('./iTodo');
const PORT = 4200;
class TodoList {
    constructor() {
        this.idOfTodo = 0;
        this.todoList = [];
    }
    addTodo(todo) {
        todo.id = this.idOfTodo;
        this.todoList.push(todo);
        this.idOfTodo++;
    }
    saveTodo() {
    }
    deleteTodo(idToDelete) {
        for (let index = 0; index < this.todoList.length; index++) {
            const element = this.todoList[index];
            if (element.id == idToDelete) {
                this.todoList.splice(idToDelete - 1, 1);
            }
        }
    }
    editTodo(todo) {
        for (let index = 0; index < this.todoList.length; index++) {
            const element = this.todoList[index];
            if (element.id == todo.id) {
                element.content = todo.content;
            }
        }
    }
    displayTodos() {
        let todoItemsReadable = "";
        this.todoList.forEach(item => {
            console.log(item.id);
            todoItemsReadable += (item.id + " " + item.content + "\r");
        });
        return todoItemsReadable;
    }
}
var todoList = new TodoList();
app.post('/todo/:content', (req, res) => {
    const content = req.params.content;
    todoList.addTodo({ content: content });
    displayTodos(res);
});
app.get('/todo', (req, res) => {
    displayTodos(res);
});
app.put('/todo/:id/:content', (req, res) => {
    const todo = {
        content: req.params.content,
        id: req.params.id
    };
    todoList.editTodo(todo);
    displayTodos(res);
});
app.delete('/todo/:id', (req, res) => {
    const id = req.params.id;
    todoList.deleteTodo(id);
    res.send(`I delete item with id : ${id}`);
    displayTodos(res);
});
app.listen(PORT, () => {
    `Listening on ${PORT}`;
});
function displayTodos(res) {
    res.send(todoList.displayTodos());
}
