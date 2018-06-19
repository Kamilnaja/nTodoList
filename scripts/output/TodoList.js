"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Todo_1 = require("./Todo");
class TodoList extends Todo_1.Todo {
    constructor() {
        super(...arguments);
        this.idOfTodo = 0;
    }
    getTodoList() {
        this.getTodoFromFile();
        return this.todoList;
    }
    addTodo(todo) {
        console.log("this = " + this.idOfTodo);
        todo.id = this.idOfTodo;
        this.todoList = JSON.parse(this.todoList);
        this.todoList.push(todo);
        this.saveTodosList();
        this.idOfTodo++;
    }
    deleteTodo(idToDelete) {
        this.todoList = JSON.parse(this.todoList);
        for (let i = 0; i < this.todoList.length; i++) {
            const element = this.todoList[i];
            idToDelete = parseInt(idToDelete, 10);
            console.log("el " + element.id + "id" + idToDelete);
            if (element.id === idToDelete) {
                console.log("idToDelete " + idToDelete);
                this.todoList.splice(i, 1);
                this.saveTodosList();
            }
            else {
                console.log(idToDelete);
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
}
exports.default = TodoList;
