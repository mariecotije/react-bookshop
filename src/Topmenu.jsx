import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Topmenu.scss";

export default function Topmenu() {
  //Give it a state open with the default value false using the useState hook.
  //Make it also get for you the setOpen function.
  const [open, setOpen] = useState(false);

  //declare function toggleMenu
  const toggleMenu = () => {
    setOpen(!open); //caling setOpen function
  };

  //Make it so that when a link in the header menu is clicked, the content of the page changes.
  //replaced by <Link> and location hook
  // const handlePageClick = (page) => {
  //   setCurrentPage(page);
  // };

  const { pathname: location } = useLocation();
  //console.log(location);

  return (
    //display nav menu if state is open
    <>
      {open ? (
        <nav className="topmenu">
          <Link
            className={`link` + (location === "/" ? " link--highlighted" : "")}
            to="/"
          >
            Home
          </Link>

          <Link
            className={
              `link` + (location === "/about-us" ? " link--highlighted" : "")
            }
            to="/about-us"
          >
            About us
          </Link>

          <Link
            className={
              `link` + (location === "/contact" ? " link--highlighted" : "")
            }
            to="/contact"
          >
            Contact
          </Link>

          <Link
            className={
              `link` + (location === "/login" ? " link--highlighted" : "")
            }
            to="/login"
          >
            Login
          </Link>
        </nav>
      ) : (
        ""
      )}

      {/* toggleMenu functioon is a value of the attribute onClick */}
      <div className="burger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}
