import { useForm } from "react-hook-form";
import { addTodo } from "../../logic/api";
import styles from "./Form.module.css";

export const Form = ({ update, setUpdate }) => {
  const { register, handleSubmit } = useForm();

  const handleCreateNewTask = (data) => {
    addTodo(data).then(() => {
      setUpdate(!update);
    });
  };

  return (
    <>
      <h3>Añadir Tarea</h3>
      <form
        className={styles.form}
        onSubmit={handleSubmit(handleCreateNewTask)}
      >
        <div className={styles.campo}>
          <label>Nombre de la Tarea</label>
          <input {...register("text")} type="text" />
        </div>
        <div className={styles.campo}>
          <label>Fecha de Vencimiento</label>
          <input {...register("fecha")} type="date" />
        </div>
        <div className={styles.campo}>
          <label>¿Completada?</label>
          <input {...register("done")} type="checkbox" />
        </div>

        <button className={styles.button} type="submit">
          Agregar Tarea
        </button>
      </form>
    </>
  );
};
