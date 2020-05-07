import React, { useContext, useEffect } from "react";
import { Transaction } from "./Transaction";
import { TransactionContext } from "./TransactionContext";

export const TransactionList = () => {
  const [database, setDatabase] = useContext(TransactionContext);
  useEffect(() => {
    console.log("Refresh UI");
  }, [database]);

  return (
    <div className="mt-5">
      <h3 className="font-semibold border-b pb-1 text-lg">History</h3>
      <div className="text-black">
        {database.length > 0 ? (
          database.map((item, id) => (
            <Transaction
              name={item.name}
              amount={item.amount}
              key={id}
              id={id}
            ></Transaction>
          ))
        ) : (
          <p className="mt-3 text-gray-100">No History</p>
        )}
      </div>
    </div>
  );
};
