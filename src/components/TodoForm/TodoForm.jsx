import addButton from "../../assets/add.svg";
import { useState } from "react";
import "./TodoForm.scss";

export default function TodoForm({ onAddTodo }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddButtonClick = () => {
    onAddTodo(inputValue);
    setInputValue("");
  };

  return (
    <div className="TodoForm">
      <div className="formContainer">
        <input
          type="text"
          className="inputTodo"
          placeholder="Add a new task"
          value={inputValue}
          onChange={handleInputChange}
        />
        <img
          src={addButton}
          className="addButton"
          alt="addbutton"
          onClick={handleAddButtonClick}
        />
      </div>
    </div>
  );
}
