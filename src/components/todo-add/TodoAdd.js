import React, { Component } from 'react'
import './TodoAdd.scss'
export default class TodoAdd extends Component {
    state = {
        value: '',
    }
    handleChange = (e) => {
        this.setState({
            value: e.target.value,
        });
    }
    handleAddTodo = () => {
        this.props.addTodo(this.state.value)
        this.setState({
            value: '',
        })
    }
    render() {
        return (
            <div className="todo-add">
                <input
                    value={this.state.value}
                    className="todo-add__input"
                    onChange={this.handleChange}
                    placeholder="Type todo"
                    type="text"
                />
                <button 
                    className="todo-add__button"
                    onClick={this.handleAddTodo}
                >
                    Add
                </button>
            </div>
        )
    }
}
