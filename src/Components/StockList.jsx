import React from "react";
const StockList = ({ stocks }) => {
  return (
    <div className="product-cards">
      {stocks.map((stock, index) => {
        const isLowStock = stock.currentStock < 60;
        return (
          <div
            key={index}
            className={`product-card ${isLowStock ? "low-stock" : ""}`}
          >
            <h3>{stock.material}</h3>
            <p>Current Stock: {stock.currentStock}</p>
            <p>Monthly Usage: {stock.monthlyUsage}</p>
            <p>Price per unit: ${stock.price}</p>
          </div>
        );
      })}
    </div>
  );
};
export default StockList;
