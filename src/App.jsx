import { useState, useEffect } from "react";
import { TaskList } from "./components/TaskList/TaskList";
import { Form } from "./components/Form/Form";
import { getTodos } from "./logic/api";

function App() {
  const [todos, setTodos] = useState([]);
  const [update, setUpdate] = useState(false);
  const [listVisible, setListVisible] = useState(true);

  useEffect(() => {
    getTodos().then((res) => setTodos(res));
  }, [update]);

  const handleListVisible = () => {
    setListVisible(!listVisible);
  };

  return (
    <div>
      <Form update={update} setUpdate={setUpdate} />
      <button onClick={handleListVisible}>
        {listVisible ? "Ocultar lista" : "Mostrar lista"}
      </button>
      {listVisible && (
        <TaskList todos={todos} update={update} setUpdate={setUpdate} />
      )}
    </div>
  );
}

export default App;
