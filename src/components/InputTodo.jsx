import { useState } from "react";
import { Todo_Context } from "../contexts/TodoContext";

function InputTodo() {
  const { todoEdite } = Todo_Context("");
  const [todo,settodo] = useState('');
  const [Input_Value,setInput_Value] = useState("");


  function passValue(e) {
    e.preventDefault();
    todo == "" ? alert("please enter") : todoEdite({todo,todoCompleted:false});
    settodo("");
  }

  return(
    <>
    <input id="#Todo_input" type="text" value={todo} placeholder="Enter Task..." onChange={(e) => settodo(e.target.value)}  />
    <button onClick={passValue}>click</button>
    </>
  )
}
export default InputTodo;