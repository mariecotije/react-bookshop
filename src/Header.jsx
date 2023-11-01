//import { useContext } from "react";
import CurrencySelection from "./CurrencySelection";
import "./Header.scss";
import Topmenu from "./Topmenu";
//import context from "./Context";

export default function Header({ currentPage, setCurrentPage, user }) {
  return (
    <header className="header">
      <div className="header__shop-name">DoubleTone</div>
      {/* //passing the prop with value about */}
      <Topmenu currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div className="currencies">
        <CurrencySelection />
      </div>
      <div className="user-info">
        {user ? (
          <div className="current-user">Current user: {user.name}</div>
        ) : (
          <div className="current-user"> &#129412; Not logged in</div>
        )}
      </div>
    </header>
  );
}
