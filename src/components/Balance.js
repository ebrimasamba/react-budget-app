import React, { useContext, useState, useEffect } from "react";
import { TransactionContext } from "./TransactionContext";

export const Balance = () => {
  const [database, setDatabase] = useContext(TransactionContext);
  // const [amount, setAmount] = useState(0);

  // useEffect(() => {
  //   const amount = database.reduce((acc, prevItem) => {
  //     acc += prevItem;
  //   }, 0);
  //   setAmount(() => {

  //   })
  //   console.log(amount);
  // }, [database]);

  return (
    <div className="text-center mt-3">
      <h4 className="uppercase text-sm">Your Balance</h4>
      <p className="font-semibold text-2xl">
        D
        {database.reduce((acc, currValue) => acc + Number(currValue.amount), 0)}
      </p>
    </div>
  );
};
