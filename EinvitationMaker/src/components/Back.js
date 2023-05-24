import back from "./Templates/arrow-left.svg";
import "./Combined.css";
import { useNavigate } from "react-router-dom";

function Back() {
  const navigate = useNavigate();

  return (
    <div>
      <img
        src={back}
        alt="back"
        id="backImg"
        onClick={() => navigate(-1)}
      ></img>
    </div>
  );
}

export default Back;
