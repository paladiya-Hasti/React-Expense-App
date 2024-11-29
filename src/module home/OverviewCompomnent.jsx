import React, { useState } from "react";
import Addview from "./Addview";

const OverviewComponent = ({ addTransaction, balance, income, expense }) => {
  const [isAddTxnVisible, toggleAddTxn] = useState(false);

  return (
    <div className="container">
      <div className="Balancebox">
        <h3>Balance: ${balance}</h3>
        <button
          className="Addtransaction"
          onClick={() => toggleAddTxn(!isAddTxnVisible)}
        >
          {isAddTxnVisible ? "Cancel" : "Add"}
        </button>
      </div>
      {isAddTxnVisible && (
        <Addview toggleAddTxn={toggleAddTxn} addTransaction={addTransaction} />
      )}
      <div className="expense">
        <div className="expense-box" style={{ color: "red" }}>
          Expense: <span>${expense}</span>
        </div>
        <div className="income-box" style={{ color: "green" }}>
          Income: <span>${income}</span>
        </div>
      </div>
    </div>
  );
};

export default OverviewComponent;
