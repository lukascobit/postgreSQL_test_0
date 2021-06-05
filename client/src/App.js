import React from 'react';
import './App.css';
import InputTodo from './components/InputTodo.js';
import ListTodos from './components/ListTodos';


function App() {
  return (
    <div className="App">
      <InputTodo/>
      <ListTodos/>
    </div>
  );
}

export default App;
