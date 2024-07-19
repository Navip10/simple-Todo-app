import React, { useEffect, useState } from 'react';
import { getTodos, deleteTodo, updateTodo } from '../api/todoService';
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await getTodos();
      setTodos(response.data);
    };

    fetchTodos();
  }, []);

  const handleToggle = async (toggledTodo) => {
    const updatedTodo = { ...toggledTodo, completed: !toggledTodo.completed };
    try {
      const response = await updateTodo(toggledTodo.id, updatedTodo);
      setTodos(todos.map((todo) => (todo.id === toggledTodo.id ? response.data : todo)));
    } catch (error) {
      console.error('Error updating todo:', error);
      // Optionally, handle the error state here
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTodo(id);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error);
      // Optionally, handle the error state here
    }
  };

  return (
    <div>
      <AddTodo onAdd={(todo) => setTodos([...todos, todo])} />
      <div className="mt-4">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={handleToggle}
            removeTodo={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
