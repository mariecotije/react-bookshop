import { useState } from "react";
import "./App.scss";
import Footer from "./Footer";
import Header from "./Header";
import MainContent from "./MainContent";
// import CurrencyContext from "./CurrencyContext";
// import context from "./Context";

function App() {
  const [currentPage, setCurrentPage] = useState("");
  const [user, setUser] = useState(null);
  return (
    <>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} user={user} setUser={setUser} />
      <MainContent currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Footer />
    </>
  );
}

export default App;

//more complex context usage
// const [contextValue, setContextValue] = useState({
//   user: null,
//   theme: "light",
//   language: "en",
//   currency: "USD",
//   authHash: null,
//   shoppingCart: [],
// });

//page content setting
//const [currentPage, setCurrentPage] = useState("home");
//const [currency, setCurrency] = useState("EUR");

// wrapping the content, all the components wrapped can subscribe and retrieve values from it
//<context.Provider value={{ contextValue, setContextValue }}>
// {/* //value can be an object value={{ currency, setCurrency }} */}
//<CurrencyContext.Provider value={currency}>
<></>;
//</CurrencyContext.Provider>
//</context.Provider>
