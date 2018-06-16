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
        console.log("getting " + this.todoList.length);
        return this.todoList;
    }
    addTodo(todo) {
        todo.id = this.idOfTodo;
        this.todoList.push(todo);
        this.idOfTodo++;
        this.saveTodosList();
    }
    getTodoFromFile() {
        fs.readFile('./data.json')
            .then((result) => {
            this.todoList = result;
            console.log("inside + " + this.todoList.length);
        })
            .catch((err) => {
            console.log(err);
        });
    }
    saveTodosList() {
        fs.writeFile('./data.json', JSON.stringify(this.todoList))
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
