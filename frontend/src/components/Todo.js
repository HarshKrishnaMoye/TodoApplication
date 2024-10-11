import React from "react";
import "../styles/Todo.css";

function Todo({ todo }) {
  return (
    <div className="container1">
      {todo.map((todo) => {
        return (
          <div key={todo._id} className="card">
            <h2>{todo.title}</h2>
            <p>{todo.description}</p>
            <button
              onClick={(e) => {
                let value = e.target.value;
                console.log(value);
              }}
            >
              {todo.complete === true ? "Completed" : "Pending"}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Todo;
