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
                this.setState({
                    todoList: responseData
                })
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
        console.log('editing item ' + e.target.id);
        var newTaskValue = window.prompt("Popraw taska");
        this.doPutRequest(e, newTaskValue);
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
                {item.id} {item.content}
                <button onClick={this.onDelete} id={item.id}>
                    X
                </button>
                <button onClick={this.onEdit} id={item.id}>
                    Edit
                </button>

            </li>
        )
        return (
            <div>
                {
                    this.state.info
                }
                <h2>Your Tasks</h2>

                <ul>
                    {items}
                </ul>
                <input type="text" value={this.state.newTaskContent} onChange={this.onChange} />
                <button value="submit" onClick={this.addTodo}>Submit</button>
            </div>
        )
    }
}

export default TodoList;