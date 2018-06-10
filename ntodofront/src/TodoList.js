import React, { Component } from 'react';

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            todoList: []
        }
        this.addTodo = this.addTodo.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        fetch("http://localhost:4200/todo")
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    todoList: responseData
                })
            })
    }

    addTodo(e) {
        e.preventDefault();
        console.log(e);


    }

    onChange(e) {
        this.setState({
            name: e.target.value
        })
    }

    render() {
        const items = this.state.todoList.map((item, key) => <li key={key}>{item.id} {item.content}</li>)
        return (
            <div>
                <ul>
                    {items}
                </ul>
                <input type="text" value={this.state.taskName} onChange={this.onChange} />
                <button value="submit" onClick={this.addTodo}>Submit</button>
            </div>

        )
    }
}

export default TodoList;