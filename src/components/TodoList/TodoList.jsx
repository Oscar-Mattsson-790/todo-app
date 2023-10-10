import TodoRow from "../TodoRow/TodoRow";
import "./TodoList.scss";

export default function TodoList({ todos, onRemoveTodo }) {
  return (
    <div className="TodoList">
      {todos.map((todo, index) => (
        <TodoRow key={index} text={todo} onRemove={() => onRemoveTodo(index)} />
      ))}
    </div>
  );
}
