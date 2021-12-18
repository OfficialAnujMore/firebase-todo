import React from "react";
import { List, ListItemText } from "@material-ui/core";

function Todo(props) {
  return (
    <div>
      <List>
        <ListItemText primary={props.text} />
      </List>
      {/* <li>{props.text}</li> */}
    </div>
  );
}

export default Todo;
