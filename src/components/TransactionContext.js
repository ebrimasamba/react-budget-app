import React, { createContext, useEffect, useState } from "react";

export const TransactionContext = createContext();
export const TransactionProvider = ({ children }) => {
  const [database, setDatabase] = useState([]);
  // useEffect(() => {}, []);
  return (
    <TransactionContext.Provider value={[database, setDatabase]}>
      {children}
    </TransactionContext.Provider>
  );
};
