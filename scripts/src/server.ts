const express = require('express');
const app = express();
const iTodoList = require('./iTodoList');
const iTodo = require('./iTodo');

class TodoList implements iTodoList {
    private idOfTodo: number = 0;
    private todoList: Array<iTodo> = [];

    addTodo(todo: iTodo): void {
        todo.id = this.idOfTodo;

        this.todoList.push(todo);
        this.idOfTodo++;
    }

    saveTodo(): void {

    }

    deleteTodo(idToDelete: number): void {
        for (let index = 0; index < this.todoList.length; index++) {
            const element = this.todoList[index];
            if (element.id == idToDelete) {
                this.todoList.splice(idToDelete - 1, 1);
            }
        }
    }

    editTodo(todo: iTodo): void {
        for (let index = 0; index < this.todoList.length; index++) {
            const element = this.todoList[index];
            if (element.id == todo.id) {
                element.content = todo.content;
            }
        }
    }

    displayTodos(): Object {
        let todoItemsReadable: string = "";
        this.todoList.forEach(item => {
            console.log(item.id);
            todoItemsReadable += (item.id + " " + item.content + "\r");
        });
        return todoItemsReadable;
    }
}

var todoList = new TodoList();

app.post('/todo/:content', (req: any, res: any) => {
    const content = req.params.content;

    todoList.addTodo({ content: content });

    displayTodos(res);
})

app.get('/todo', (req: any, res: any) => {
    displayTodos(res);
})

app.put('/todo/:id/:content', (req: any, res: any) => {

    const todo: iTodo = {
        content: req.params.content,
        id: req.params.id
    }
    todoList.editTodo(todo);
    displayTodos(res);
})

app.delete('/todo/:id', (req: any, res: any) => {
    const id = req.params.id;
    todoList.deleteTodo(id);
    res.send(`I delete item with id : ${id}`);
    displayTodos(res);
})

app.listen(3000, () => {
    `Listening on 3000`;
})

function displayTodos(res: any) {
    res.send(todoList.displayTodos());
}
