import { createContext } from "react";

//use createContext to create a new context. Give it a default value of 'EUR'
// Put the context inside a constant called context
const CurrencyContext = createContext('EUR');   //object


export default CurrencyContext;  //export for other files OBJECT!!!!
//this object will make it possible to spread across other components
//to spread it should be in the highest component in the hierarchy

