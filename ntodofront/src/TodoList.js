import React, { Component } from 'react';
const API_URL = "http://localhost:4200"

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            todoList: [],
            newTaskContent: '',
            info: ''
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

    addTodo() {
        if (this.state.newTaskContent) {

            fetch(`${API_URL}/todo/${this.state.newTaskContent}`, {
                method: 'post',
            })
                .then((response) => response.json())
                .then(responseData => this.setState({
                    todoList: responseData,
                    newTaskContent: '',
                    info: ''
                }))
        } else {
            this.setState({
                info: 'wpisz coś'
            })
        }
    }

    onChange(e) {
        this.setState({
            newTaskContent: e.target.value
        })
    }

    render() {
        const items = this.state.todoList.map((item, key) => <li key={key}>{item.id} {item.content}</li>)
        return (
            <div>
                {
                    this.state.info
                }
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