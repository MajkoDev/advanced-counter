"use client";

import { createContext, useState } from "react";

export const CounterContext = createContext(null);

export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(3);

  const [value, setValue] = useState({
    increment: 1,
    decrement: 1,
    multiplication: 4,
    division: 3,
    exponentiation: 2,
  });

  return (
    <CounterContext.Provider value={{ count }}>
      {children}
    </CounterContext.Provider>
  );
};
