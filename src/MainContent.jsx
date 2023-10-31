import Homepage from "./Homepage";
import LoginForm from "./LoginForm";
import "./MainContent.scss";

export default function MainContent({ currentPage }) {
  return (
    <>
      <main className="main">
        <>
          {currentPage === "" ? <Homepage /> : ""}

          {currentPage === "about" ? <h2>About us</h2> : ""}

          {currentPage === "contact" ? <h2>Contact form</h2> : ""}

          {currentPage === "login" ? (
            <LoginForm user={user} setUser={setUser} />
          ) : (
            ""
          )}
        </>
      </main>
    </>
  );
}
