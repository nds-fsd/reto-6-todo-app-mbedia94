import { useState } from "react";
import { updateTodo, deleteTodo } from "../../../logic/api";
import styles from "./Card.module.css";

export const Card = ({ text, done, id, update, setUpdate }) => {
  const [isDone, setIsDone] = useState(done);

  const handleUpdateTask = () => {
    setIsDone(!isDone);
    updateTodo(id, { done: !isDone });
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
    <li className={styles.card}>
      <h3 className={styles.text}>{text}</h3>
      <div className={styles.items}>
        <div className={styles.checkbox}>
          <input
            id="checkbox"
            type="checkbox"
            checked={isDone}
            onChange={handleUpdateTask}
          />
          <label className={styles.text} htmlFor="checkbox">
            Completado
          </label>
        </div>
        <button className={styles.button} onClick={handleDeleteTask}>
          Borrar
        </button>
      </div>
    </li>
  );
};
