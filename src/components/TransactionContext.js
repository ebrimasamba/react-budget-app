import React, { createContext, useState } from "react";

export const TransactionContext = createContext();
export const TransactionProvider = ({ children }) => {
  const [database, setDatabase] = useState([]);
  return (
    <TransactionContext.Provider value={[database, setDatabase]}>
      {children}
    </TransactionContext.Provider>
  );
};
