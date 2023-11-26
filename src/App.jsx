import { useState } from "react";
import { TaskList } from "./components/TaskList/TaskList";
import { Form } from "./components/Form/Form";
import styles from "./App.module.css";

function App() {
  const [update, setUpdate] = useState(false);
  const [listVisible, setListVisible] = useState(true);

  const handleListVisible = () => {
    setListVisible(!listVisible);
  };

  return (
    <div className={styles.root}>
      <h1>Todo APP</h1>
      <Form update={update} setUpdate={setUpdate} />
      <button onClick={handleListVisible} className={styles.button}>
        {listVisible ? "Ocultar lista" : "Mostrar lista"}
      </button>
      {listVisible && (
        <TaskList update={update} setUpdate={setUpdate} />
      )}
    </div>
  );
}

export default App;
