import "./TodoListPage.scss";
import TodoNavbar from "../../components/TodoNavbar/TodoNavbar";
import TodoList from "../../components/TodoList/TodoList";
import TodoForm from "../../components/TodoForm/TodoForm";
import { useState } from "react";

function TodoListPage() {
  const [todos, setTodos] = useState(["Example Todo"]);

  const handleAddTodo = (todoText) => {
    setTodos((prevTodos) => [...prevTodos, todoText]);
  };

  const handleRemoveTodo = (indexToRemove) => {
    setTodos((prevTodos) =>
      prevTodos.filter((_, index) => index !== indexToRemove)
    );
  };

  return (
    <div className="todo-list-page">
      <TodoNavbar />
      <TodoList todos={todos} onRemoveTodo={handleRemoveTodo} />
      <TodoForm onAddTodo={handleAddTodo} />
    </div>
  );
}

export default TodoListPage;
