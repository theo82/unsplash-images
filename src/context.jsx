import { createContext, useContext, useState, useEffect, Children } from "react";

const AppContext = createContext()

export const AppProvider = ({children}) => {
 const greeting = 'hello'

 return <AppContext.Provider value={{ }}>
  {children}
 </AppContext.Provider>
}

export const useGlobalContext = () => useContext(AppContext)