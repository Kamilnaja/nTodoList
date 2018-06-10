class TodoList implements iTodoList {
    private idOfTodo: number = 0;
    private todoList: Array<iTodo> = [];

    addTodo(todo: iTodo): void {
        todo.id = this.idOfTodo;

        this.todoList.push(todo);
        this.idOfTodo++;
    }

    saveTodo(): void {
        // todo - save to file
    }

    deleteTodo(idToDelete: any): void {
        for (let i = 0; i < this.todoList.length; i++) {
            const element = this.todoList[i];
            idToDelete = parseInt(idToDelete, 10);
            if (element.id === idToDelete) {
                this.todoList.splice(i, 1);
            } else {
                console.log("error")
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
        return this.todoList
    }
}

export default TodoList