const fs = require("fs-extra");

class TodoList implements iTodoList {
    private idOfTodo: number = 0;
    private todoList: Array<iTodo> = [];

    constructor() {
        this.getTodoFromFile();
    }

    getTodoList(): Object {
        this.getTodoFromFile();
        console.log("getting " + this.todoList.length)
        return this.todoList;
    }

    addTodo(todo: iTodo): void {
        todo.id = this.idOfTodo;
        this.todoList.push(todo);
        this.idOfTodo++;
        this.saveTodosList();
    }

    getTodoFromFile() {
        fs.readFile('./data.json')
            .then((result: Object) => {
                this.todoList = result;
                console.log("inside + " + this.todoList.length);
            })
            .catch((err: any) => {
                console.log(err);
            })
    }

    saveTodosList(): void {
        fs.writeFile('./data.json', JSON.stringify(this.todoList))
            .catch((err: any) => {
                console.log(err);
            })
    }

    deleteTodo(idToDelete: any): void {
        for (let i = 0; i < this.todoList.length; i++) {
            const element = this.todoList[i];
            idToDelete = parseInt(idToDelete, 10);
            if (element.id === idToDelete) {
                this.todoList.splice(i, 1);
            };
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


}

export default TodoList