import { Todo } from "./Todo";
import { itemId } from './utils';

class TodoList extends Todo implements iTodoList {

    private idOfTodo: number = 0;

    getTodoList(): Object {
        this.getTodoFromFile();
        return this.todoList;
    }

    addTodo(todo: iTodo): void {
        console.log("this = " + this.idOfTodo);
        todo.id = this.idOfTodo;
        this.todoList = JSON.parse(this.todoList);
        this.todoList.push(todo);
        this.saveTodosList();
        this.idOfTodo++;
    }

    deleteTodo(idToDelete: any): void {
        this.todoList = JSON.parse(this.todoList);

        for (let i = 0; i < this.todoList.length; i++) {
            const element = this.todoList[i];

            idToDelete = parseInt(idToDelete, 10);
            console.log("el " + element.id + "id" + idToDelete);
            if (element.id === idToDelete) {
                console.log("idToDelete " + idToDelete);
                this.todoList.splice(i, 1);
                this.saveTodosList();
            } else {
                console.log(idToDelete)
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
}

export default TodoList