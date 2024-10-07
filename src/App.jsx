import { useEffect, useState } from "react";
import { Todo } from "./contexts/TodoContext";
import InputTodo from "./components/InputTodo";
import Show from "./components/Show";

function App() {
  const [todos, settodos] = useState([]);

  const todoEdite = (todo) => {
    settodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
    // settodos((prev) => prev.push({id:Date.now(),...todo}));
  };
  const updateTodo = (id, todoMsg) => {
    settodos((prev) =>
      prev.map((todo) => (todo.id == id ? (todo.todo = todoMsg) : ""))
    );
    console.log(todos);
  };
  const todoDelete = (params) => {
    console.log("parma", params);
    settodos((prev) => prev.filter((todo) => todo.id !== params));
  };
  const todoToggol = () => {};

  useEffect(() => {
    const storedTodos = localStorage.getItem("todoss");
    if (storedTodos) {
      try {
        const todoos = JSON.parse(storedTodos);
        settodos(todoos);
        
      } catch (error) {
        console.error("Error parsing JSON from localStorage", error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todoss",JSON.stringify(todos));
  }, [todos]);

  return (
    <Todo.Provider
      value={{ todos, todoEdite, todoDelete, todoToggol, updateTodo }}
    >
      <InputTodo />
      {/* <Show todos={todos} />; */}
      {todos.map((pre) => {
        return (
          <div key={pre.id}>
            <Show todos={pre} />;
          </div>
        );
      })}
    </Todo.Provider>
  );
}

export default App;
