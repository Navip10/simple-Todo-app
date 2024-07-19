import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/todos/';

export const getTodos = async () => {
  return await axios.get(API_URL);
};

export const createTodo = async (todo) => {
  return await axios.post(API_URL, todo);
};

export const updateTodo = async (id, updatedTodo) => {
    try {
      const response = await axios.put(`${API_URL}${id}/`, updatedTodo);
      return response;
    } catch (error) {
      console.error('Error updating todo:', error);
      throw error;
    }
  };

export const deleteTodo = async (id) => {
  return await axios.delete(`${API_URL}${id}/`);
};


