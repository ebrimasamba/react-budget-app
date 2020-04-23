import React from "react";
import { Layout } from "./components/Layout";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";

import "./App.css";

function App() {
  return (
    <Layout>
      <div className="max-w-xl mx-auto">
        <Balance></Balance>
        <IncomeExpenses></IncomeExpenses>
        <TransactionList></TransactionList>
        <AddTransaction></AddTransaction>
      </div>
    </Layout>
  );
}

export default App;
