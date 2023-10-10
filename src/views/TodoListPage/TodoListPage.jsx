import "./TodoListPage.scss";
import TodoNavbar from "../../components/TodoNavbar/TodoNavbar";
import TodoList from "../../components/TodoList/TodoList";

function TodoListPage() {
  return (
    <div className="todo-list-page">
      <TodoNavbar />
      <TodoList />
    </div>
  );
}

export default TodoListPage;
