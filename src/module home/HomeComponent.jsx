// // import React, { useEffect, useState } from "react";
// // import OverviewCompomnent from "./OverviewCompomnent";
// // import TransactionCompomnent from "./TransactionCompomnent";

// // const HomeComponent = () => {
// //   const [transactions, setTransactions] = useState([]);
// // const [expense,updateexpense]=useState(0)
// // const [income,updateincome]=useState(0)
// //   const addTransaction = (transaction) => {
// //     setTransactions((prev) => [...prev, transaction]);
// //     console.log("Transactions:", transactions);
// //   };
// //   const calculateBalance = () => {
// //     let exp = 0;
// //     let inc = 0;

// //     transactions.amp((payload) => {
// //       payload.type === "Expense"
// //         ? (exp = exp + payload.amount)
// //         : (inc = inc + payload.amount);
// //     });
// //   };
// //   updateexpense(exp)
// //   updateincome(inc)
// //   useEffect(()=>calculateBalance(),[transactions])
// //   return (
// //     <div>
// //       <OverviewCompomnent addtransction={addTransaction} />
// //       <TransactionCompomnent transactions={transactions} />
// //     </div>
// //   );
// // };

// // export default HomeComponent;


// import React, { useEffect, useState } from "react";
// import OverviewCompomnent from "./OverviewCompomnent";
// import TransactionCompomnent from "./TransactionCompomnent";

// const HomeComponent = () => {
//   const [transactions, setTransactions] = useState([]);
//   const [expense, updateExpense] = useState(0);
//   const [income, updateIncome] = useState(0);

//   const addTransaction = (transaction) => {
//     setTransactions((prev) => [...prev, transaction]);
//     console.log("Transactions:", [...transactions, transaction]);
//   };

//   const calculateBalance = () => {
//     let exp = 0;
//     let inc = 0;

//     // Corrected method: Use `forEach` instead of `amp` (which is incorrect)
//     transactions.forEach((payload) => {
//       if (payload.type === "Expense") {
//         exp += payload.amount;
//       } else {
//         inc += payload.amount;
//       }
//     });

//     // Move these updates inside the function
//     updateExpense(exp);
//     updateIncome(inc);
//   };

//   // Correct dependency for useEffect
//   useEffect(() => {
//     calculateBalance();
//   }, [transactions]);

//   return (
//     <div>
//       <OverviewCompomnent addTransaction={addTransaction} />
//       <TransactionCompomnent transactions={transactions} />
//       <div>
//         <p>Income: {income}</p>
//         <p>Expense: {expense}</p>
//       </div>
//     </div>
//   );
// };

// export default HomeComponent;


import React, { useEffect, useState } from "react";
import OverviewComponent from "../module home/OverviewCompomnent";
import TransactionCompomnent from "../module home/TransactionCompomnent";

const HomeComponent = () => {
  const [transactions, setTransactions] = useState([]);
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);

  const addTransaction = (transaction) => {
    setTransactions((prev) => [...prev, transaction]);
  };

  const calculateBalance = () => {
    let exp = 0;
    let inc = 0;

    transactions.forEach((txn) => {
      if (txn.type === "Expense") {
        exp += txn.amount;
      } else {
        inc += txn.amount;
      }
    });

    setExpense(exp);
    setIncome(inc);
  };

  useEffect(() => {
    calculateBalance();
  }, [transactions]);

  return (
    <div>
      <OverviewComponent
        addTransaction={addTransaction}
        balance={income - expense}
        income={income}
        expense={expense}
      />
      <TransactionCompomnent transactions={transactions} />
    </div>
  );
};

export default HomeComponent;
