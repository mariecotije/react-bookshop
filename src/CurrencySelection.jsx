import { useState, useEffect } from "react";
//import CurrencyContext from "./CurrencyContext"; //import to use values from context

export default function CurrencySelection() {
  //using the context value
  //const currencyFromContext = useContext(CurrencyContext);

  //stateful values
  const [currencies, setCurrencies] = useState([]);
  const [currency, setCurrency] = useState(
    localStorage.getItem("currency") || "EUR"
  ); //declare a stateful value currency
  const [exchangeRate, setExchangeRate] = useState(1); //declare a stateful value exchangeRate

  //changing the value of the select
  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);

    console.log("Currency changed: ", currency);
  };

  //load currencies from API
  // https://classes.codingbootcamp.cz/assets/classes/books-api/currencies.php

  const loadCurrnecies = async () => {
    const response = await fetch(
      "https://classes.codingbootcamp.cz/assets/classes/books-api/currencies.php"
    );
    const data = await response.json();

    setCurrencies(data);

    //console.log(data);
  };

  //load exchange rate from bank
  const loadExchangeRate = async () => {
    const response = await fetch(
      "https://classes.codingbootcamp.cz/assets/classes/books-api/exchange-rate.php?currency=" +
        currency
    );
    const data = await response.json();

    setExchangeRate(data.rate); //when data are fetched, we are updating exchange rate
    //console.log(data);
  };

  //load currencies just once
  useEffect(() => {
    loadCurrnecies();
  }, []);

  //load exchange rate everytime the currency changes
  useEffect(() => {
    loadExchangeRate(currency);
    localStorage.setItem("currency", currency); //to save chosen currency after reload or going to another page
  }, [currency]);

  return (
    <>
      Choose your currency:
      <select name="currency" value={currency} onChange={handleCurrencyChange}>
        {currencies.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
      <br />
      Exchange rate: {exchangeRate} {currency} / 1 EUR
    </>
  );
}
