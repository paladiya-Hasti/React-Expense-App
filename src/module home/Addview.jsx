import React, { useState } from "react";

const Addview = ({ toggleAddTxn, addTransaction }) => {
  const [amount, setAmount] = useState("");
  const [desc, setDesc] = useState("");
  const [type, setType] = useState("");

  const handleAddTransaction = () => {
    if (!amount || !desc || !type) {
      alert("Please fill all fields!");
      return;
    }

   
    addTransaction({
      amount: Number(amount),
      desc,
      type,
      id: Date.now(),
    });
    toggleAddTxn(false); 
  };

  return (
    <div className="addcontainer">
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <div className="radiobox">
        <input
          type="radio"
          id="expense"
          name="type"
          value="EXPENSE"
          checked={type === "EXPENSE"}
          onChange={(e) => setType(e.target.value)}
        />
        <label htmlFor="expense">Expense</label>
        <input
          type="radio"
          id="income"
          name="type"
          value="INCOME"
          checked={type === "INCOME"}
          onChange={(e) => setType(e.target.value)}
        />
        <label htmlFor="income">Income</label>
      </div>
      <button className="Addtransaction" onClick={handleAddTransaction}>
        Add Transaction
      </button>
    </div>
  );
};

export default Addview;
