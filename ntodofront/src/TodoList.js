import React, { Component } from 'react';
const API_URL = "http://localhost:4200"

class TodoList extends Component {
    constructor() {
        super();

        this.state = {
            todoList: [],
            newTaskContent: '',
            info: 'List is empty, add something',
            isEditing: false
        }

        this.addTodo = this.addTodo.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onEdit = this.onEdit.bind(this);
    }

    componentDidMount() {
        fetch(`${API_URL}/todo`)
            .then((response) => response.json())
            .then((responseData) => {
                if (responseData) {
                    this.setState({
                        todoList: responseData
                    })
                } else {
                    this.setState({
                        todoList: ""
                    })
                }

            })
            .catch(err => {
                console.log(err);
            })
    }

    onChange(e) {
        this.setState({
            newTaskContent: e.target.value
        })
    }

    addTodo() {
        if (this.state.newTaskContent) {
            this.doPostRequest();
        } else {
            this.setState({
                info: 'wpisz coś'
            })
        }
    }

    onEdit(e) {
        var newTaskValue = window.prompt("Edit your task...");
        if (newTaskValue) {
            this.doPutRequest(e, newTaskValue);
        }
    }

    doPutRequest(e, newTaskValue) {
        fetch(`${API_URL}/todo/${e.target.id}/${newTaskValue}`, { method: 'put' })
            .then((response) => response.json())
            .then(responseData => this.setState({
                todoList: responseData,
                info: 'Editing successfull!'
            }));
    }

    doPostRequest() {
        fetch(`${API_URL}/todo/${this.state.newTaskContent}`, { method: 'post' })
            .then((response) => response.json())
            .then(responseData => this.setState({
                todoList: responseData,
                newTaskContent: '',
                info: ''
            }));
    }

    onDelete(e) {
        fetch(`${API_URL}/todo/${e.target.id}`, { method: 'delete' })
            .then((response) => response.json())
            .then(responseData => this.setState({
                todoList: responseData,
                info: ''
            }));
    }

    render() {
        const items = this.state.todoList.map((item, key, uKey) =>
            <li key={key}>
                <div className="id-content-wrap">
                    <span className="item-id">
                        {item.id}
                    </span>
                    <span className="item-content">
                        {item.content}
                    </span>
                </div>

                <div>
                    <button onClick={this.onDelete} id={item.id}>
                        X
                </button>
                    <button onClick={this.onEdit} id={item.id}>
                        Edit
                </button>
                </div>
            </li>
        )
        return (
            <div>
                <h2>
                    {
                        this.state.info
                    }
                </h2>
                <h2>Your Tasks</h2>
                <input type="text" className="task-input" value={this.state.newTaskContent} onChange={this.onChange} />
                <button className="btn-task-input" value="submit" onClick={this.addTodo}>Submit</button>
                <ul className="tasks">
                    {items}
                </ul>

            </div>
        )
    }
}

export default TodoList;