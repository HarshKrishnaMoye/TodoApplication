import React, { useState } from "react";
import "../styles/CreateTodo.css";

function CreateTodo({ refreshTodos }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="container">
      <div className="create">
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => {
            const value = e.target.value;
            setTitle(value);
          }}
        />
        <input
          type="text"
          placeholder="Description"
          onChange={(e) => {
            const value = e.target.value;
            setDescription(value);
          }}
        />
        <button
          onClick={() => {
            fetch("http://localhost:3001/todo", {
              method: "POST",
              body: JSON.stringify({
                title: title,
                description: description,
              }),
              headers: {
                "Content-Type": "application/json",
              },
            }).then((response) => {
              alert("ToDo Added");
              refreshTodos();
              setTitle("");
              setDescription("");
            });
          }}
        >
          Add ToDo
        </button>
      </div>
    </div>
  );
}

export default CreateTodo;
