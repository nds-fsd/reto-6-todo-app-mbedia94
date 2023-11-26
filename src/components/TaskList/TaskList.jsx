import { useState, useEffect } from "react";
import { Card } from "./Card/Card";
import { getTodo } from "../../logic/api";
import styles from "./TaskList.module.css";

export const TaskList = ({ update, setUpdate }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodo().then((res) => setTodos(res));
  }, [update]);

  return (
    <ul className={styles.list}>
      <h2>Lista de tareas</h2>
      {todos.map((todo) => {
        return (
          <Card
            key={todo.id}
            id={todo.id}
            text={todo.text}
            done={todo.done}
            update={update}
            setUpdate={setUpdate}
          />
        );
      })}
    </ul>
  );
};
