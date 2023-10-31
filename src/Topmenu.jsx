import { useState } from "react";
import "./Topmenu.scss";

export default function Topmenu({ currentPage, setCurrentPage }) {
  //Give it a state open with the default value false using the useState hook.
  //Make it also get for you the setOpen function.
  const [open, setOpen] = useState(false);

  //declare function toggleMenu
  const toggleMenu = () => {
    setOpen(!open); //caling setOpen function
  };

  //Make it so that when a link in the header menu is clicked, the content of the page changes.
  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  return (
    //display nav menu if state is open
    <>
      {open ? (
        <nav className="topmenu">
          <a
            className={
              `link` + (currentPage === "" ? " link--highlighted" : "")
            }
            href="#"
            onClick={() => handlePageClick("")} //when clicked the content of the page is updated
          >
            Home
          </a>
          <a
            className={
              `link` + (currentPage === "about" ? " link--highlighted" : "")
            }
            href="#about"
            onClick={() => handlePageClick("about")}
          >
            About us
          </a>
          <a
            className={
              `link` + (currentPage === "contact" ? " link--highlighted" : "")
            }
            href="#contact"
            onClick={() => handlePageClick("contact")}
          >
            Contact
          </a>
          <a
            className={
              `link` + (currentPage === "login" ? " link--highlighted" : "")
            }
            href="#login"
            onClick={() => handlePageClick("login")}
          >
            Login
          </a>
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
