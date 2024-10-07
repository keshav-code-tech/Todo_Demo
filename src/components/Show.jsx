import { useEffect, useState } from "react";
import { Todo_Context } from "../contexts/TodoContext";

function Show({todos}) {
  const [Value, setValue] = useState(false);
  const [isEdite, setIsEdite] = useState(true);
  const [ok, setok] = useState("Edite");
  const {todoDelete,updateTodo,todoEdite} = Todo_Context();
  const [Checked,setChecked] = useState(false);
  
  function Edite(e) {
    e.preventDefault();

    if (ok === "Edite") {  
      setok("ok");  
      setIsEdite(false);  
  } else {  
      setok("Edite");  
      setIsEdite(true);  
      todoDelete(todo.id);  
      todoEdite({ todo: Value, todoCompleted: false });  
  }

  }

  function Delete(e) {
    todoDelete(todos.id)
  }

  useEffect(() => {
    if (todos) {
      setValue(todos.todo);
    }
  }, [todos]);

  function checkbox(e) {
    setChecked(!Checked)
  }

  return (
    <>
      <div>
        <input type="checkbox" onChange={checkbox} />
        <input
          className={`${Value ? "block" : "hidden"} ${Checked ? "line-through" : ""}`}
          type="text"
          value={Value}
          onChange={(e) => setValue(e.target.value)}
          readOnly={isEdite}
          disabled={Checked}
        />
        <button disabled={Checked} onClick={Edite}>{ok}</button>
        <button onClick={Delete}>Delete</button>                                                                                                                                   
      </div>
    </>
  )
}
export default Show;
