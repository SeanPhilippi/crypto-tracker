import React, { createContext, useState } from 'react';

export const Context = createContext();

export const Provider = ({ children }) => {
const [page, setPage] = useState('settings');

  return (
    <Context.Provider value={{page, setPage}}>
      { children }
    </Context.Provider>
  );
};