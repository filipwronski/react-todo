import React, { Component } from 'react'

export default class TodoItem extends Component {
    render() {
        const { toggleTodo, todo } = this.props;
        const { id, title, done } = todo;
        return (
            <li>
                <input type="checkbox" checked={ done } onChange={ () => toggleTodo(id) } />
                { title }
                { done ? (
                    <span> - done</span>
                ) : (
                    <span> - not done</span>
                )}
                <button onClick={ () => this.props.removeTodo(id) }>
                    remove
                </button>
            </li>
        )
    }
}
