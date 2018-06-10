class TodoList implements iTodoList {
    private idOfTodo: number = 0;
    private todoList: Array<iTodo> = [{ id: 0, content: "lorem" }, { id: 1, content: "super" }];

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
                this.todoList.splice(idToDelete, 1);
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