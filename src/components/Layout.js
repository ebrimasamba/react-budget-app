import React from "react";
import { Header } from "./Header";
import { TransactionProvider } from "./TransactionContext";

export const Layout = ({ children }) => {
  return (
    <div className="py-5 text-white bg-back min-h-screen px-10">
      <TransactionProvider>
        <Header></Header>
        {children}
      </TransactionProvider>
    </div>
  );
};
