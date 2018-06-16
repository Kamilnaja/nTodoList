"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs-extra");
class TodoList {
    constructor() {
        this.idOfTodo = 0;
        this.todoList = [];
    }
    getTodoList() {
        this.setTodoListFromFile();
        return this.todoList;
    }
    setTodoList(list) {
        this.todoList = list;
    }
    addTodo(todo) {
        todo.id = this.idOfTodo;
        this.todoList.push(todo);
        this.idOfTodo++;
    }

    setTodoListFromFile() {
        fs.readFile('./../data.json', (err, result) => {
            this.todoList = JSON.parse(result);
        });
    }

    saveTodo() {
        // fs.writeFile('./data.json', 'superhot');
        // console.log("saved");
        // fs.readFile('./data.json', (err: any, data: String) => {
        //     console.log(data.toString());
        // })
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
