import { createContext, useState } from "react";

const ArrayContext = createContext({});

export default ArrayContext;

export function ArrayContextProvider({children}) {
  const [array,setArray] = useState([]);
  return (
    <ArrayContext.Provider value = {{array, setArray}}>
      {children}
    </ArrayContext.Provider>  
  )
}
