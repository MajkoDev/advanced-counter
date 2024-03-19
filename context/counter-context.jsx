"use client";

import { createContext, useState, useReducer } from "react";

// reducer function
function reducer(state, action) {
  switch (action.type) {
    case "VALUE_CHANGE":
      return {
        ...state,
        value: { ...state.value, [action.operation]: action.value },
      };
    case "INCREMENT":
      return { ...state, count: state.count + state.value.increment };
    case "DECREMENT":
      return { ...state, count: state.count - state.value.increment };
    case "MULTIPLICATION":
      return { ...state, count: state.count * state.value.multiplication };
    case "DIVISION":
      return { ...state, count: state.count / state.value.division };
    case "EXPONENTIATION":
      return { ...state, count: state.count ** state.value.exponentiation };
    case "RESET":
      return { ...state, count: 0 };
    default:
      return state;
  }
}

export const CounterContext = createContext(null);

export const CounterProvider = ({ children }) => {
  // useReducer hook
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    value: {
      increment: 1,
      decrement: 1,
      multiplication: 4,
      division: 3,
      exponentiation: 2,
    },
  });

  const handleValueChange = (e, operation) => {
    dispatch({
      type: "VALUE_CHANGE",
      operation: operation,
      value: parseInt(e.target.value),
    });
  };

  function increment() {
    dispatch({ type: "INCREMENT" });
  }
  function decrement() {
    dispatch({ type: "DECREMENT" });
  }
  function reset() {
    dispatch({ type: "RESET" });
  }

  return (
    <CounterContext.Provider
      value={{
        state,
        handleValueChange,
        increment,
        decrement,
        reset,
        dispatch,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};
