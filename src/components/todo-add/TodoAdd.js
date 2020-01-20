import React, { Component } from 'react'

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
            <div>
                <input
                    value={this.state.value}
                    onChange={this.handleChange}
                    type="text"
                />
                <button 
                    onClick={this.handleAddTodo}
                >
                    Add todo
                </button>
            </div>
        )
    }
}
