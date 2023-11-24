const API_URL = "http://localhost:3000/todo";

export const getTodos = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
};

export const addTodo = async (data) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const todo = await response.json();
  return todo;
};

export const updateDoneTodo = async (id, done) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(done),
  });
  const data = await response.json();
  return data;
};

export const deleteTodo = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
};
