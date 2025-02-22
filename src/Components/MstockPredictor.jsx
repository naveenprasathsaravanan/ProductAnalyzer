import React, { useState } from "react";
const MstockPredictor = ({ stocks }) => {
  const [purchaseAmount, setPurchaseAmount] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [pricePerUnit, setPricePerUnit] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const handleSubmit = (e, stockItem) => {
    e.preventDefault();
    const selectedStock = stocks.find((stock) => stock.item === stockItem);
    if (selectedStock) {
      const { currentStock, monthlyUsage, price } = selectedStock;
      const months = 6; 
      const projectedUsage = monthlyUsage * months;
      const stockNeeded = projectedUsage - currentStock;
      console.log(`Projected Usage: ₹${projectedUsage}`);
      console.log(`Stock Needed: ₹${stockNeeded}`);
      setPurchaseAmount(stockNeeded > 0 ? stockNeeded : 0);
      setPricePerUnit(price);
      setTotalPrice(stockNeeded > 0 ? stockNeeded * price : 0);
      setSelectedProduct(stockItem);
      setShowModal(true);
    }
  };
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div style={{ marginTop: "40px" }}>
      <div className="product-cards">
        {stocks.map((stock) => {
          const isCriticalStock = stock.currentStock < stock.monthlyUsage * 0.75;
          return (
            <div
              key={stock.item}
              className={`product-card ${isCriticalStock ? "critical-stock" : ""}`}
            >
              <h3>{stock.item}</h3>
              <p>Current Stock: {stock.currentStock} units</p>
              <p>Monthly Usage: {stock.monthlyUsage} units</p>
              <p>Price per Unit: ₹{stock.price}</p>
              <form onSubmit={(e) => handleSubmit(e, stock.item)}>
                <button type="submit">Predict Purchase</button>
              </form>
            </div>
          );
        })}
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Purchase Prediction for {selectedProduct}</h2>
            <p>Stock Needed: {purchaseAmount} units</p>
            <p>Price per Unit: ₹{pricePerUnit}</p>
            <p>Total Price: ₹{totalPrice.toFixed(2)}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};
export default MstockPredictor;
