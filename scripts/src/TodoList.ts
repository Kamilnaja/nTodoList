const fs = require("fs-extra");

class TodoList implements iTodoList {
    private idOfTodo: number = 0;
    private todoList: Array<iTodo> = [];

    getTodoList(): Object {
        this.setTodoListFromFile();
        return this.todoList
    }

    setTodoList(list: any) {
        this.todoList = list;
    }


    addTodo(todo: iTodo): void {
        todo.id = this.idOfTodo;

        this.todoList.push(todo);
        this.idOfTodo++;
    }


    setTodoListFromFile(): void {
        fs.readFile('./data.json', (err: any, result: Array<iTodo>) => {
            this.todoList = JSON.parse(result);
        });
    }

    saveTodo(): void {

        // fs.writeFile('./data.json', 'superhot');
        // console.log("saved");
        // fs.readFile('./data.json', (err: any, data: String) => {
        //     console.log(data.toString());
        // })

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