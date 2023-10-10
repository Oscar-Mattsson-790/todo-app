import "./TodoNavbar.scss";
import ahaLogo from "../../assets/aha.svg";

export default function TodoNavbar() {
  return (
    <div className="todoNavbar">
      <img className="ahaLogoNavbar" src={ahaLogo} alt="ahaLogo" />
    </div>
  );
}
