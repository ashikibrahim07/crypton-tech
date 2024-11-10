import React from "react";

const OrderStat = ({ title, count, percentage }) => {
  const change = parseFloat(percentage.replace("%", ""));

  return (
    <div className="order-stat">
      <h3>{title}</h3>
      <p>{count}</p>
      <span className={change < 0 ? "negative" : "positive"}>
        {change < 0 ? `▼` : `▲`} {Math.abs(change)}%
      </span>
    </div>
  );
};

export default OrderStat;
