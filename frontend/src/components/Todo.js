import React from "react";
import "../styles/Todo.css";

function Todo({ todo, refreshTodos }) {
  const handleToggleComplete = async (id) => {
    const response = await fetch("http://localhost:3001/completed", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    if (!response.ok) {
      console.error("Failed to update todo status.");
    } else {
      refreshTodos();
      console.log("Todo status updated successfully.");
    }
  };

  return (
    <div className="container1">
      {todo.map((todo) => {
        return (
          <div key={todo._id} className="card">
            <h2>{todo.title}</h2>
            <p>{todo.description}</p>
            <button onClick={() => handleToggleComplete(todo._id)}>
              {todo.completed ? "Completed" : "Pending"}
            </button>
            <button
              onClick={async () => {
                const response = await fetch(
                  "http://localhost:3001/deleteTodo",
                  {
                    method: "DELETE",
                    body: JSON.stringify({
                      id: todo._id,
                    }),
                    headers: {
                      "Content-Type": "application/json",
                    },
                  }
                );
                console.log(response);
                if (!response.ok) {
                  console.error("Failed to delete todo.");
                } else {
                  refreshTodos();
                  console.log("Todo deleted successfully.");
                }
              }}
            >
              Delete Todo
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Todo;
