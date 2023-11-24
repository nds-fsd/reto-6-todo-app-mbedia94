import { useForm } from "react-hook-form";
import { addTodo } from "../../logic/api";

export const Form = ({ update, setUpdate }) => {
  const { register, handleSubmit } = useForm();

  const handleCreateNewTask = (data) => {
    console.log(data);
    addTodo(data).then(() => {
      setUpdate(!update);
    });
  };

  return (
    <div>
      <h3>Añadir Tarea</h3>
      <form onSubmit={handleSubmit(handleCreateNewTask)}>
        <label>Nombre de la Tarea</label>
        <input {...register("text")} type="text" />

        <label>Fecha de Vencimiento</label>
        <input {...register("fecha")} type="date" />

        <label>¿Completada?</label>
        <input {...register("done")} type="checkbox" />

        <button type="submit">Agregar Tarea</button>
      </form>
    </div>
  );
};
