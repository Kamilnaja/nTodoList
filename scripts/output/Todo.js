"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs-extra");
class Todo {
    constructor() {
        this.getTodoFromFile();
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
}
exports.Todo = Todo;
