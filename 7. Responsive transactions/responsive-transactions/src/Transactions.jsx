import React from "react";
import "./styles.scss";

const Transaction = ({ name, amount, date, time, type }) => {
  return (
    <div className="transaction">
      <div className="transaction-info">
        <img src="https://picsum.photos/id/22/200/300" alt={name} />
        <div>
          <h3>{name}</h3>
          <p>
            {date} • {time}
          </p>
        </div>
      </div>
      <div className="transaction-amount">
        <span
          className={
            type === "Received" ? "green" : type === "Outgoing" ? "red" : ""
          }
        >
          {type === "Received" ? "+" : "-"}${amount}.00
        </span>
        <p>{type}</p>
      </div>
    </div>
  );
};

const Transactions = () => {
  const transactions = [
    {
      name: "Aokiji",
      amount: 13,
      date: "28 Feb 2023",
      time: "06:23 PM",
      type: "Received",
    },
    {
      name: "Kizaru",
      amount: 9,
      date: "28 Feb 2023",
      time: "06:23 PM",
      type: "Outgoing",
    },
    {
      name: "Akainu",
      amount: 20,
      date: "28 Feb 2023",
      time: "06:23 PM",
      type: "Received",
    },
  ];

  return (
    <div className="transactions">
      <div className="transactions-header">
        <p>Last Transactions</p>
        <button className="see-all">See All</button>
      </div>
      <div className="transactions-list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.name} {...transaction} />
        ))}
      </div>
    </div>
  );
};

export default Transactions;
