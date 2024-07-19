import React, { useState } from 'react';
import { createTodo } from '../api/todoService';

function AddTodo({ onAdd }) {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title) return;
    const newTodo = await createTodo({ title, completed: false });
    onAdd(newTodo.data);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="flex-grow p-2 rounded bg-gray-700 text-white placeholder-gray-400"
        placeholder="Create new todo..."
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Add
      </button>
    </form>
  );
}

export default AddTodo;
