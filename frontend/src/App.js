import { useState, useEffect } from "react";
import "./App.css";
import CreateTodo from "./components/CreateTodo";
import Todo from "./components/Todo";

function App() {
  const [todos, setTodos] = useState([]);
  const fetchTodos = async () => {
    const response = await fetch("http://localhost:3001/todos");
    const data = await response.json();
    setTodos(data.todos);
    
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="App">
      <CreateTodo refreshTodos={fetchTodos} />
      <Todo todo={todos} />
    </div>
  );
}

export default App;
