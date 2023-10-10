import addButton from "../../assets/add.svg";
import { useState } from "react";
import "./TodoForm.scss";

export default function TodoForm({ onAddTodo }) {
  const [inputValue, setInputValue] = useState("");

  const handleAddClick = () => {
    if (inputValue.trim()) {
      onAddTodo(inputValue);
      setInputValue("");
    }
  };

  return (
    <div className="TodoForm">
      <div className="formContainer">
        <input
          type="text"
          className="inputTodo"
          placeholder="Add a new task"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <img
          src={addButton}
          className="addButton"
          alt="addButton"
          onClick={handleAddClick}
        />
      </div>
    </div>
  );
}
