import React, { useState } from "react";

export default function AddTodo({ addTodo }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or Description cannot be blank");
    } else {
      addTodo(title, desc);
      setTitle("");
      setDesc("");
    }
  };

  return (
    <form onSubmit={submit}>
      <div className="mb-3">
        <label className="form-label">Todo Title</label>
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Description</label>
        <input
          type="text"
          className="form-control"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-success btn-sm">
        Add Todo
      </button>
    </form>
  );
}
