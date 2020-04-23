import React, { useState, useContext, useEffect } from "react";
import { TransactionContext } from "./TransactionContext";

export const AddTransaction = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [database, setDatabase] = useContext(TransactionContext);
  const [items, setItems] = useState([]);

  useEffect(() => {
    // setDatabase(JSON.parse(localStorage.getItem("database")));
    //   eslint-disable-next-line
  }, []);
  const addTransaction = (e) => {
    console.log(database);
    e.preventDefault();
    setDatabase((prevItems) => [...prevItems, { name: name, amount: amount }]);
    // localStorage.setItem("database", JSON.stringify(database));

    setName("");
    setAmount("");
  };
  return (
    <div>
      <form action="">
        <h3 className="font-bold border-b pb-1 text-lg mt-3">
          Add new transaction
        </h3>
        <div className="mt-5 ">
          <div className="text-sm">
            <label htmlFor="" className="block font-semibold mb-1">
              Name
            </label>
            <input
              type="text"
              name=""
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="form-input w-full p-3 shadow rounded-md text-sm"
              placeholder="name of transaction"
            />
          </div>
          <div className="mt-3 text-sm">
            <label htmlFor="" className="block font-semibold mb-1">
              Amount
            </label>
            <input
              type="number"
              name=""
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value);
              }}
              className="form-input w-full p-3 shadow rounded-md text-sm"
              placeholder="negative-expense positive-income"
            />
          </div>
          <button
            className="mt-4 w-full py-3 bg-indigo-600 text-white font-bold rounded-md shadow uppercase border-b-4 border-indigo-700"
            onClick={addTransaction}
          >
            Add Transaction
          </button>
        </div>
      </form>
    </div>
  );
};
