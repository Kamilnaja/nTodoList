"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TodoList {
    constructor() {
        this.idOfTodo = 0;
        this.todoList = [{ id: 0, content: "lorem" }, { id: 1, content: "super" }];
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
                this.todoList.splice(idToDelete, 1);
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
