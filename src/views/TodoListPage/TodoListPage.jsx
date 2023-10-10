import "./TodoListPage.scss";
import TodoNavbar from "../../components/TodoNavbar/TodoNavbar";
import TodoList from "../../components/TodoList/TodoList";
import TodoForm from "../../components/TodoForm/TodoForm";
import { useState } from "react";

function TodoListPage() {
  const [todos, setTodos] = useState(["Example Todo"]);

  const addTodo = (newTodoText) => {
    setTodos((prevTodos) => [...prevTodos, newTodoText]);
  };
  return (
    <div className="todo-list-page">
      <TodoNavbar />
      <TodoList todos={todos} />
      <TodoForm onAddTodo={addTodo} />
    </div>
  );
}

export default TodoListPage;
