import React, { Component } from 'react'
import './TodoItem.scss';
export default class TodoItem extends Component {
    render() {
        const { toggleTodo, todo } = this.props;
        const { id, title, done } = todo;
        return (
            <li
                className={ done ? 'todo-item todo-item--done' : 'todo-item'} 
            >   <label className="todo-item__checkbox-container">
                    <input
                        type="checkbox"
                        checked={ done } onChange={ () => toggleTodo(id) }
                        className="todo-item__checkbox"
                    />
                    <span className="todo-item__checkmark"></span>
                </label>
                <span className="todo-item__text">{ title }</span>
                <button 
                    onClick={ () => this.props.removeTodo(id) }
                    className="todo-item__button"
                >
                    remove
                </button>
            </li>
        )
    }
}
