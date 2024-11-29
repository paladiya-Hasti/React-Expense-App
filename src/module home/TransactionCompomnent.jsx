import React, { useEffect, useState } from "react";

const TransactionCell = (props) => {
  return (
    <div className="cell" style={{ backgroundColor: props.payload?.type === "Expense" ? "#ffdcdc" : "#e9ffd4" }}>
      <span>{props.payload.desc}</span>
      <span>{props.payload.amount}</span>
    </div>
  );
};

const TransactionCompomnent = (props) => {
  const [searchText, updateSearchText] = useState("");
  const [filteredTransactions, updateFilteredTransactions] = useState(props.transactions);

  const filterData = (searchText) => {
    if (!searchText || searchText.trim().length === 0) {
      updateFilteredTransactions(props.transactions);
      return;
    }
    const filtered = props.transactions.filter((payload) =>
      payload.desc.toLowerCase().includes(searchText.toLowerCase().trim())
    );
    updateFilteredTransactions(filtered);
  };

  useEffect(() => {
    filterData(searchText);
  }, [searchText, props.transactions]);

  return (
    <div className="container">
      <h2>Transactions</h2>
      <div className="Transaction">
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            updateSearchText(e.target.value);
          }}
        />
        {filteredTransactions?.length ? (
          filteredTransactions.map((payload, index) => <TransactionCell key={index} payload={payload} />)
        ) : (
          <p>No transactions found</p>
        )}
      </div>
    </div>
  );
};

export default TransactionCompomnent;
