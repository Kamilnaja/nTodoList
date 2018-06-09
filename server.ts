const express = require('express');
const app = express();
const iTodoList = require('./iTodoList');
const iTodo = require('./iTodo');

class TodoList implements iTodoList {
    private idOfTodo: number = 0;
    private todoList: Array<iTodo> = [{
        id: 1,
        content: "super"
    },
    {
        id: 2,
        content: 'lorem'
    }];

    addTodo(todo: iTodo): void {
        todo.id = this.idOfTodo;

        this.todoList.push(todo);
        this.idOfTodo++;
        this.displayTodos();
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
        this.displayTodos();
    }

    editTodo(todo: iTodo): void {
        for (let index = 0; index < this.todoList.length; index++) {
            const element = this.todoList[index];
            if (element.id == todo.id) {
                element.content = todo.content;
            }
        }
        this.displayTodos();
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

    todoList.addTodo(
        {
            content: content
        }
    );

    res.send(todoList.displayTodos());
})

app.get('/todo', (req: any, res: any) => {
    res.send(
        todoList.displayTodos()
    );
})

app.put('/todo', (req: any, res: any) => {

    const todo: iTodo = {
        content: req.params.content,
        id: req.params.content
    }

    todoList.editTodo(todo);
})

app.delete('/todo/:id', (req: any, res: any) => {
    const id = req.params.id;
    todoList.deleteTodo(id);
    res.send(`I delete item with id : ${id}`);
})

app.listen(3000, () => {
    `Listening on 3000`;
})