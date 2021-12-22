import React from "react";
import { List, ListItemText, Button } from "@material-ui/core";
// import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import db from "../firebase";


function Todo(props) {
  const deleteTodo = (event) => {
    db.collection("todos").doc(props.todoItem.id).delete();
  };
  return (
    <div>
      <List>
        <ListItemText primary={props.todoItem.todo} />
      </List>

      <Button onClick={deleteTodo}>Delete me</Button>

      {/* <li>{props.text}</li> */}
    </div>
  );
}

export default Todo;
