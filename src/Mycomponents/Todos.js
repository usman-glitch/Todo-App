import React from "react";
import Todoitem from "./Todoitem";

export default function Todos(props) {
  return (
    <div className="container">
      <h3>Todos</h3>
      {props.todos.map((todo, sno) => {
        return <Todoitem key={sno} todo={todo} onDelete={props.onDelete} />;
      })}
    </div>
  );
}
