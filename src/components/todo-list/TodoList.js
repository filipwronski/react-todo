import React, { Component } from "react";
import TodoItem from '../../components/todo-item/TodoItem.js';
import TodoAdd from '../../components/todo-add/TodoAdd.js';
import './TodoList.scss'
export default class TodoList extends Component {
    state = {
        todoList: []
    }

    toggleTodo = (id) => {
        const todoIndex =  this.state.todoList.findIndex((todo) => {
            return todo.id === id;
        })
        if (todoIndex >= 0) {
            this.setState((state) => {
                const newTodoList = [...state.todoList]
                newTodoList[todoIndex].done = !newTodoList[todoIndex].done
                return {
                    todoList: newTodoList
                }
            })
        }  
    }

    removeTodo = (id) => {
        const todoIndex =  this.state.todoList.findIndex((todo) => {
            return todo.id === id;
        })
        if (todoIndex >= 0) {
            this.setState((state) => {
                const newTodoList = [
                    ...state.todoList.slice(0, todoIndex),
                    ...state.todoList.slice(todoIndex + 1, state.todoList.length)
                ];
                return {
                    todoList: newTodoList,
                };
            })
        }  
    }

    addTodo = (newTodo) => {
        console.log(newTodo)
        this.setState((state) => {
            return {
                todoList: [...state.todoList, {
                    id: Math.floor(Math.random() * 100),
                    title: newTodo,
                    done: false,
                }],
            }
        })
    }

    renderTodoList = () => {
        return this.state.todoList.map((todo) => 
            <TodoItem
                key={todo.id} 
                todo={todo} 
                removeTodo={this.removeTodo}
                toggleTodo={this.toggleTodo}
            />
        )
    }

    render() {
        return (
            <div className="todo-list">
                <TodoAdd addTodo={this.addTodo}/>
                <ul className="todo-list__container">
                    { this.renderTodoList()  }
                </ul>
            </div>
        )
    }
}