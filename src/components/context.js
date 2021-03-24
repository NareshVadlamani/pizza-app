import React, { useContext, createContext } from "react";
const data = {};
export const PizzaContext = createContext({ data });

export function useContextInfo() {
  const context = useContext(PizzaContext);
  if (!context) throw new Error(" context info not set");
  return context;
}
