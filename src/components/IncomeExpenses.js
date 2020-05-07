import React, { useContext, useEffect, useState } from "react";
import { TransactionContext } from "./TransactionContext";
import { FaMoneyBill, FaShoppingBag } from "react-icons/fa";

export const IncomeExpenses = () => {
  const [database, setDatabase] = useContext(TransactionContext);
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);

  let expenses = 0;
  let incomes = 0;

  const Income = () => {
    const incomeAmount = database.filter(
      (incomeAmount) => incomeAmount.amount > 0
    );
    if (incomeAmount.length > 0) {
      incomes = incomeAmount.reduce(
        (acc, currValue) => acc + Number(currValue.amount),
        0
      );
      setIncome(incomes);
      // console.log("From income and expenses reduce", incomes);
    }
  };

  const Expense = () => {
    const expenseAmount = database.filter(
      (expenseAmount) => expenseAmount.amount < 0
    );

    if (expenseAmount.length > 0) {
      expenses = expenseAmount.reduce(
        (acc, currValue) => acc + Number(currValue.amount),
        0
      );
      setExpense(expenses);
      // console.log("From income and expenses reduce", expenses);
    }
    // console.log("From income and expenses expenseAmount", expenseAmount);
  };

  useEffect(() => {
    Expense();
    Income();
    //eslint-disable-next-line
  }, [database]);

  return (
    <div className="flex justify-center mt-2 rounded-md text-sm ">
      <div className="bg-blue-gradient text-gray-100 text-center w-1/2 rounded-md border-l-4 border-blue-600 p-3 relative shadow">
        <div className="relative z-10">
          <h5 className="uppercase font-bold ">Income</h5>
          <span className="text font-bold text-xl">
            +D{Math.abs(income).toFixed(2)}
          </span>
        </div>
        <FaMoneyBill className="absolute text-blue-400 text-4xl top-5 left-3"></FaMoneyBill>
      </div>
      <div className="bg-red-gradient text-gray-100 text-center w-1/2 rounded-md border-l-4 border-red-600 p-3 relative ml-2 shadow">
        <div className="relative z-10">
          <h5 className="uppercase font-bold ">Expenses</h5>
          <span className="tex font-bold text-xl">
            -D{Math.abs(expense).toFixed(2)}
          </span>
        </div>
        <FaShoppingBag className="absolute text-red-400 text-4xl top-5 left-3"></FaShoppingBag>
      </div>
    </div>
  );
};
