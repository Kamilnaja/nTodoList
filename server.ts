const express = require('express');
const app = express();
const iTodoList = require('./iTodoList');
const iTodo = require('./iTodo');

class TodoList implements iTodoList {

    private todoList: Array<iTodo> = [];

    constructor() {

    }

    addTodo(todo: iTodo): void {
        this.todoList.push(todo);
        this.displayTodos();
    }

    saveTodo(): void {

    }

    displayTodos(): Object {
        this.todoList.forEach(item => {
            console.log(item);
        });
        return todoList;
    }
}

var todoList = new TodoList();

app.post('/todo/:content', (req: any, res: any) => {
    const content = req.params.content;
    console.log(content);
    todoList.addTodo(
        {
            id: 11,
            content: 'First'
        }
    );

    res.send('dodano');

})

app.get('/todo', (req: any, res: any) => {
    res.send(
        todoList.displayTodos()
    );
    console.log('data displayed')
})

app.listen(3000, () => {
    `Listening on 3000`;
})