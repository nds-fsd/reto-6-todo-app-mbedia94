import { useState } from "react";
import { updateDoneTodo, deleteTodo } from "../../logic/api";

export const Card = ({ text, done, id, update, setUpdate }) => {
  const [isDone, setIsDone] = useState(done);

  const handleUpdateTask = () => {
    setIsDone(!isDone);
    updateDoneTodo(id, { done: !isDone });
  };

  const handleDeleteTask = () => {
    deleteTodo(id)
      .then(() => {
        setUpdate(!update);
      })
      .catch((error) => {
        console.error("Error eliminando:", error);
      });
  };

  return (
    <>
      <li>
        <h2>{text}</h2>
        <p>{id}</p>
        <input type="checkbox" checked={isDone} onChange={handleUpdateTask} />
        <button onClick={handleDeleteTask}>Borrar</button>
      </li>
    </>
  );
};
