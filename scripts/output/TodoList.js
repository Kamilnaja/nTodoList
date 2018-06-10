"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
        // todo - save to file
    }
    deleteTodo(idToDelete) {
        for (let i = 0; i < this.todoList.length; i++) {
            const element = this.todoList[i];
            idToDelete = parseInt(idToDelete, 10);
            if (element.id === idToDelete) {
                this.todoList.splice(i, 1);
            }
            else {
                console.log("error");
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
        return this.todoList;
    }
}
exports.default = TodoList;
