// src/context/GlobalState.js
import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  transactions: [],
  budgets: [],
  investments: [],
  savingsGoals: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
