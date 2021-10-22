import { createContext, useState } from "react";
// syntax on how to create a useContext to be used across the entire application
const ArrayContext = createContext({});

export default ArrayContext;

export function ArrayContextProvider({ children }) {
  const [array, setArray] = useState([]);
  return (
    <ArrayContext.Provider value={{ array, setArray }}>
      {children}
    </ArrayContext.Provider>
  );
}
