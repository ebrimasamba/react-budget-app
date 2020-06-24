import React, { useState, useContext, useEffect } from "react";
import { TransactionContext } from "./TransactionContext";

export const AddTransaction = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [database, setDatabase] = useContext(TransactionContext);
  const [items, setItems] = useState([]);
  // const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  useEffect(() => {
    // setDatabase(JSON.parse(localStorage.getItem("database")));
    //   eslint-disable-next-line
  }, []);
  const addTransaction = (e) => {
    e.preventDefault();
    console.log(database);
    if (name === "") {
      alert("your item has no name");
      return;
    }

    if (Number(amount) === 0 || amount === "") {
      alert("you transaction amount cannot be empty or zero");
      return;
    }
    setDatabase((prevItems) => [...prevItems, { name: name, amount: amount }]);

    setName("");
    setAmount("");
  };
  return (
    <div>
      <form action="">
        <h3 className="font-semibold border-b pb-1 text-lg mt-3">
          Add new transaction
        </h3>
        <div className="mt-5 ">
          <div className="text-sm">
            <label htmlFor="name" className="block font-semibold mb-1">
              Name
            </label>
            <input
              type="text"
              name=""
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="form-input w-full p-3 shadow rounded-md text-sm text-black"
              placeholder="name of transaction"
              id="name"
            />
          </div>
          <div className="mt-3 text-sm">
            <label htmlFor="amount" className="block font-semibold mb-1">
              Amount
            </label>
            <input
              type="number"
              name=""
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value);
              }}
              className="form-input w-full p-3 shadow rounded-md text-sm text-black"
              placeholder="negative-expense positive-income"
              id="amount"
            />
          </div>
          <button
            className="mt-4 w-full py-3 bg-indigo-600 text-white font-semibold rounded-md shadow uppercase border-b-4 border-indigo-700"
            onClick={addTransaction}
          >
            Add Transaction
          </button>
        </div>
      </form>
    </div>
  );
};
