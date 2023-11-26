const API_URL = "http://localhost:3000";
const PATH = "todo";

export const getTodo = async (id) => {
  let url = `${API_URL}/${PATH}`;
  if (id) {
    url = `${url}/${id}`;
  }
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const addTodo = async (data) => {
  let url = `${API_URL}/${PATH}`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const todo = await response.json();
  return todo;
};

export const updateTodo = async (id, done) => {
  let url = `${API_URL}/${PATH}`;
  if (id) {
    url = `${url}/${id}`;
  }
  const response = await fetch(url, {
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
  let url = `${API_URL}/${PATH}`;
  if (id) {
    url = `${url}/${id}`;
  }
  const response = await fetch(url, {
    method: "DELETE",
  });
  return;
};
