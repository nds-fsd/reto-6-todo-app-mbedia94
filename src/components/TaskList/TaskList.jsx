import { Card } from "../Card/Card";

export const TaskList = ({ todos, update, setUpdate }) => {
  return (
    <>
      <ul>
        <p>Lista de tareas</p>
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
    </>
  );
};
