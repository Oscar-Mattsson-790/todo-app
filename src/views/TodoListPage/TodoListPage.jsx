import { useState } from "react";
import "./TodoListpage.scss";

function TodoListPage() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleNewTodoChange = (e) => setNewTodo(e.target.value);

  const handleNewTodoAdd = () => {
    if (newTodo === "") return;
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };

  return (
    <div className="todo-list-page">
      <header>
        <nav className="navbar">My Todos</nav>
      </header>
      <main>
        <ul>
          {todos.map((todo, idx) => (
            <li key={idx}>{todo}</li>
          ))}
        </ul>
      </main>
      <footer>
        <input type="text" value={newTodo} onChange={handleNewTodoAdd} />
        <button onClick={handleNewTodoChange}></button>
      </footer>
    </div>
  );
}

export default TodoListPage;
