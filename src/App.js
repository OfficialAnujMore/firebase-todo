import React, { useState } from "react";
import "./App.css";
import { FormControl, Button, Input, InputLabel } from "@material-ui/core";
import Todo from "./components/Todo";

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
      <FormControl>
        <InputLabel>Write a todo</InputLabel>
        <Input
          placeholder="Add todo"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
      </FormControl>
      <Button
        disabled={!input}
        type="submit"
        onClick={addTodo}
        variant="contained"
        color="primary"
      >
        Add todo
      </Button>

      <ul>
        {todo.map((item) => (
          <Todo text={item} />
        ))}
      </ul>
    </div>
  );
}

export default App;
