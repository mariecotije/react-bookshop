import { Link, Outlet } from "react-router-dom";
import "./SubpageLayout.scss";

export default function SubpageLayout() {
  return (
    <div className="layout">
      <Link className="backHome" to="/">
        {" "}
        🏠 Back to home{" "}
      </Link>

      <div className="layout__content">
        <Outlet />
      </div>
    </div>
  );
}
