import { Link } from "react-router-dom";
import "./sidebar.scss";

function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        <img src="./ps.png" />
      </div>
      <div className="sidebar-body">
        <Link to={"overview"}>
          <button className="sidebar-item">Ubersicht</button>
        </Link>
        <Link to={"overview"}>
          <button className="sidebar-item">Erstellen</button>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
