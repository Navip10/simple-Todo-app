import React from 'react';

function TodoItem({ todo, onToggle, removeTodo }) {
  return (
    <li className="bg-gray-200 p-2 my-2 rounded flex justify-between items-center">
      <div
        onClick={() => onToggle(todo)}
        className={`h-6 w-6 rounded-full border-2 ${todo.completed ? 'bg-green-500 border-green-500' : 'bg-red-500 border-red-500'} flex items-center justify-center cursor-pointer mr-2`}
      >
        {todo.completed && (
          <span className="text-white text-sm">✓</span> // Checkmark for completed todos
        )}
      </div>
      <span className={`flex-1 ${todo.completed ? 'text-gray-500 line-through' : 'text-gray-900'}`}>
        {todo.title}
      </span>
      <button
        onClick={() => removeTodo(todo.id)}
        className="bg-red-500 text-white p-1 rounded"
      >
        ✕ {/* X symbol for the remove button */}
      </button>
    </li>
  );
}

export default TodoItem;
