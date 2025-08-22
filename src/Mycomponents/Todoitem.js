import React from "react";

export default function Todoitem({ todo, onDelete }) {
  return (
    <div className="card my-3 p-3 shadow-sm">
      <h4 style={{ fontSize: "1.5rem" }}>{todo.title}</h4>
      <p className="text-muted">{todo.desc}</p>
      <div>
        <button className="btn btn-success btn-sm mx-1" onClick={() => alert(`Completed: ${todo.title}`)}>Complete</button>
        <button className="btn btn-danger btn-sm" onClick={() =>onDelete(todo)}>Delete</button>
      </div>
    </div>
  );
}
