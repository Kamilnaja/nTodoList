import React, { Component } from 'react';
const API_URL = "http://localhost:4200"

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
        fetch(`${API_URL}/todo`)
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

        fetch(`${API_URL}/todo/${this.state.newTaskName}`, {
            method: 'post',
        })
            .then((res) => {
                if (res.ok) {
                    console.log(res.json())
                } else {
                    throw new Error("Error with server response")
                }
            })
            .then(responseData => {
                this.setState({
                    todoList:
                        this.state.todoList.push(this.newTaskName)
                })
            })




    }

    onChange(e) {
        this.setState({
            newTaskName: e.target.value
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