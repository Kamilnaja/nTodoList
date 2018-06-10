"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TodoList_1 = require("./TodoList");
var todoList = new TodoList_1.default();
exports.get_todo = (req, res) => {
    res.send(todoList.displayTodos());
};
exports.post_todo = (req, res) => {
    const content = req.params.content;
    todoList.addTodo({ content: content });
    return res.send(todoList.displayTodos());
};
exports.put_todo = (req, res) => {
    const todo = {
        content: req.params.content,
        id: req.params.id
    };
    todoList.editTodo(todo);
    return res.send(todoList.displayTodos());
};
exports.delete_todo = (req, res) => {
    const id = req.params.id;
    todoList.deleteTodo(id);
    return res.send(todoList.displayTodos());
};
