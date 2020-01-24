import React from 'react';
import TodoList from './components/todo-list/TodoList.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My first React todo list</h1>
      <TodoList/>
    </div>
  );
}

export default App;
