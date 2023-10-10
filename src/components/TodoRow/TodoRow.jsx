import "./TodoRow.scss";
import trashButton from "../../assets/trash.svg";
import checkBox from "../../assets/checkBox.svg";

export default function TodoRow() {
  return (
    <div className="todoRow">
      <div className="checkboxAndTextContainer">
        <img className="checkBox" src={checkBox} alt="checkBox" />
        <p>Todo Text</p>
      </div>
      <div className="trashContainer">
        <img className="trash" src={trashButton} alt="trashButton" />
      </div>
    </div>
  );
}
