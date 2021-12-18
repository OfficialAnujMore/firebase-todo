import React, { useState, useEffect } from "react";
import "./App.css";
import { FormControl, Button, Input, InputLabel } from "@material-ui/core";
import Todo from "./components/Todo";
import db from "./firebase";

function App() {
  const [todo, setTodo] = useState([
    "Develop react todo list",
    "Prepare for exam",
    "Pay bike maintenance",
  ]);
  const [input, setInput] = useState("");

  useEffect(() => {
    // console.log(firebase);
    // console.log(db);

    try {
      db.collection("todos").onSnapshot((snapshot) => {
        console.log(
          snapshot.docs.map((doc) => doc.data().todo)
        );

        setTodo(snapshot.docs.map((doc) => doc.data().todo));
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  console.log(input);

  const addTodo = (event) => {
    event.preventDefault();
    setTodo([...todo, input]);
    setInput("jjgj");
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
