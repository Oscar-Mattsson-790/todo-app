import "./LandingPage.scss";
import ahaLogo from "../../assets/aha.svg";
import sunLogo from "../../assets/sun.svg";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/todolist");
  };

  return (
    <div className="landing" onClick={handleClick}>
      <div className="landingContainer">
        <img className="ahaLogo" src={ahaLogo} alt="ahaLogo" />
        <h1 className="landingHeaderText">A Todo App</h1>
      </div>
      <img className="sunLogo" src={sunLogo} alt="sunLogo" />
    </div>
  );
}

export default LandingPage;
