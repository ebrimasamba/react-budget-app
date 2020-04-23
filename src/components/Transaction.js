import React, { useContext } from "react";
import { TransactionContext } from "./TransactionContext";
import { FaTrash } from "react-icons/fa";

export const Transaction = ({ name, amount, id }) => {
  const styles = `border-r-4 p-2 mt-3  shadow bg-white flex justify-between text-sm rounded relative z-10`;
  const [database, setDatabase] = useContext(TransactionContext);
  const deleteTransaction = (e) => {
    console.log(database[id].name, " has been deleted");
    setDatabase(database.filter((value, index) => index !== id));
    localStorage.setItem("database", JSON.stringify(database));
    console.log("database", database);
  };
  return (
    <div className="relative transactions" id={id}>
      <div>
        <button
          className="delete-btn absolute px-2 border bg-red-400 text-white h-full flex items-center rounded-l transition-ease-in-out duration-100"
          onClick={deleteTransaction}
        >
          <FaTrash></FaTrash>
        </button>
      </div>
      <div
        className={
          amount > 0 ? `border-blue-500 ${styles}` : `border-red-500 ${styles}`
        }
      >
        <span className="font-semibold text-capitalize">{name}</span>
        <span className="font-semibold">
          {amount > 0 ? `+D${amount}` : `-D${Math.abs(amount)}`}
        </span>
      </div>
    </div>
  );
};
