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

  const handleValueChange = (e, operation) => {
    setValue((prevValue) => ({
      ...prevValue,
      [operation]: parseInt(e.target.value),
    }));
  };

  function increment() {
    setCount((prevCount) => (prevCount += value.increment));
  }
  const decrement = () => {
    setCount((prevCount) => prevCount - value.decrement);
  };
  function multiplication() {
    setCount((prevCount) => (prevCount *= value.multiplication));
  }
  function division() {
    setCount((prevCount) => (prevCount /= value.division));
  }
  function exponentiation() {
    setCount((prevCount) => (prevCount **= value.exponentiation));
  }

  function reset() {
    setCount(0);
  }

  return (
    <CounterContext.Provider
      value={{
        count,
        handleValueChange,
        increment,
        decrement,
        multiplication,
        division,
        exponentiation,
        reset,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};
