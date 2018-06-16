"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs-extra");
class TodoList {
    constructor() {
        this.idOfTodo = 0;
        this.todoList = [];
        this.getTodoFromFile();
    }
    getTodoList() {
        this.getTodoFromFile();
        return this.todoList;
    }
    addTodo(todo) {
        todo.id = this.idOfTodo;
        this.todoList = JSON.parse(this.todoList);
        this.todoList.push(todo);
        console.log(this.todoList);
        this.idOfTodo++;
        this.saveTodosList();
    }
    getTodoFromFile() {
        fs.readJson('./data.json')
            .then((result) => {
            this.todoList = JSON.stringify(result);
        })
            .catch((err) => {
            console.log(err);
        });
    }
    saveTodosList() {
        console.log(this.todoList);
        fs.writeJson('./data.json', this.todoList)
            .catch((err) => {
            console.log(err);
        });
    }
    deleteTodo(idToDelete) {
        for (let i = 0; i < this.todoList.length; i++) {
            const element = this.todoList[i];
            idToDelete = parseInt(idToDelete, 10);
            if (element.id === idToDelete) {
                this.todoList.splice(i, 1);
            }
            ;
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
}
exports.default = TodoList;
