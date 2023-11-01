import "./styles/LoginForm.scss";

export default function LoginForm({ user, setUser }) {
  const loginUser = () => {
    const userData = {
      id: 1,
      name: "John",
      email: "john.doe@gmail.com",
    };
    setUser(userData);
  };

  const logoutUser = () => {
    setUser(null); // Set the user state to null to log out
  };
  return (
    <>
      <h3>Login page</h3>

      {user ? (
        <div className="logged-user">
          <div className="current-user__name">{user.name}</div>
          <div className="current-user__email">{user.email}</div>
          <button onClick={logoutUser}>Logout</button>
        </div>
      ) : (
        <fieldset className="loginForm">
          <legend>Login:</legend>
          <input type="name" placeholder="Enter your username" /> <br />
          <input type="password" placeholder="Enter your password" />
          <br />
          <button onClick={loginUser}>Login</button>
        </fieldset>
      )}
    </>
  );
}
