import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState([
    "Develop react todo list",
    "Prepare for exam",
    "Pay bike maintenance",
  ]);
  const [input, setInput] = useState("");

  console.log(input);

  const addTodo = (event) => {
    event.preventDefault();
    setTodo([...todo, input]);
    setInput("");
  };

  return (
    <div className="App">
      <form action="">
        <input
          placeholder="Enter your task"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />

        <button onClick={addTodo}>Add todo</button>

        <ul>
          {todo.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default App;
