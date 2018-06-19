const fs = require("fs-extra");

export abstract class Todo {

    constructor() {
        this.getTodoFromFile();
    }

    public todoList: any;

    getTodoFromFile() {
        fs.readJson('./data.json')
            .then((result: Object) => {
                this.todoList = JSON.stringify(result);
            })
            .catch((err: any) => {
                console.log(err);
            })
    }

    saveTodosList(): void {
        console.log(this.todoList);
        fs.writeJson('./data.json', this.todoList)
            .catch((err: any) => {
                console.log(err);
            })
    }
}