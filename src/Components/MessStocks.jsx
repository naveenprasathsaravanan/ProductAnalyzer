import React from "react";
const MessStocks = ({ stocks2 }) => {
  return (
    <div className="product-cards">
      {stocks.map((stocks2, index) => {
        const isLowStock = stocks2.currentStock < 60;
        return (
          <div
            key={index}
            className={`product-card ${isLowStock ? "low-stock" : ""}`}
          >
            <h3>{stocks2.material}</h3>
            <p>Current Stock: {stocks2.currentStock}</p>
            <p>Monthly Usage: {stocks2.monthlyUsage}</p>
            <p>Price per unit: ₹{stocks2.price}</p>
          </div>
        );
      })}
    </div>
  );
};
export default MessStocks;
