import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import { getTodos } from './api/todoService';
import './index.css'


function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await getTodos();
      setTodos(response.data);
    };

    fetchTodos();
  }, []);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const removeTodo = async (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div className="bg-gradient-to-r from-purple-800 to-blue-600 h-screen flex justify-center items-center">
      <div className="w-full max-w-3xl p-6 bg-black bg-opacity-50 rounded-lg ">
        <h1 className="text-white text-2xl font-bold mb-4 text-center">TODO</h1>
        
        <TodoList todos={todos} removeTodo={removeTodo} />
      </div>
    </div>
  );
}

export default App;
