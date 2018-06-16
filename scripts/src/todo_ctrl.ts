import TodoList from './TodoList';

var todoList = new TodoList();

exports.get_todo = (req: any, res: any) => {
    res.send(todoList.getTodoList());
}

exports.post_todo = (req: any, res: any) => {
    const content = req.params.content;
    todoList.addTodo({ content: content });
    return res.send(todoList.getTodoList());
}

exports.put_todo = (req: any, res: any) => {
    const todo: iTodo = {
        content: req.params.content,
        id: req.params.id
    }
    todoList.editTodo(todo);
    return res.send(todoList.getTodoList());
}

exports.delete_todo = (req: any, res: any) => {
    const id = req.params.id;
    todoList.deleteTodo(id);
    return res.send(todoList.getTodoList());
}