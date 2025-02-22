import React, { useState } from "react";
import PredictionForm from "./Components/PredictionForm";
import MstockPredictor from "./Components/MstockPredictor";
import './App.css';
const App = () => {
  const [stocks] = useState([
    { material: "Cement", currentStock: 500, monthlyUsage: 300, price: 300 },
    { material: "Steel", currentStock: 800, monthlyUsage: 120, price: 650 },
    { material: "Bricks", currentStock: 50000, monthlyUsage: 8000, price: 6 },
    { material: "Sand", currentStock: 100, monthlyUsage: 250, price: 500 },
    { material: "Gravel", currentStock: 650, monthlyUsage: 150, price: 450 },
    { material: "Paint", currentStock: 20, monthlyUsage: 50, price: 1200 },
    { material: "Pipes", currentStock: 450, monthlyUsage: 60, price: 250 },
    { material: "Timber", currentStock: 700, monthlyUsage: 100, price: 750 },
    { material: "Glass", currentStock: 200, monthlyUsage: 40, price: 2000 },
    { material: "Tiles", currentStock: 900, monthlyUsage: 120, price: 900 },
    { material: "Gypsum", currentStock: 100, monthlyUsage: 250, price: 500 },
    { material: "Wires", currentStock: 600, monthlyUsage: 150, price: 450 },
  ]);
  const [stocks2] = useState([
    { item: "Rice", currentStock: 250, monthlyUsage: 200, price: 50 },
    { item: "Dal", currentStock: 300, monthlyUsage: 150, price: 80 },
    { item: "Oil", currentStock: 100, monthlyUsage: 50, price: 100 },
    { item: "Sugar", currentStock: 150, monthlyUsage: 70, price: 40 },
    { item: "Spices", currentStock: 5, monthlyUsage: 30, price: 150 },
    { item: "Coffee powder", currentStock:20 ,monthlyUsage: 20, price: 200 },
    { item: "Salt", currentStock: 60, monthlyUsage: 100, price: 20 },
    { item: "Flour", currentStock: 400, monthlyUsage: 180, price: 60 },
    { item: "Tea powder", currentStock: 1008, monthlyUsage: 20, price: 180 },
    { item: "Vegetables", currentStock: 70, monthlyUsage: 120, price: 30 },
    { item: "Fruits", currentStock: 250, monthlyUsage: 100, price: 50 },
    { item: "Milk", currentStock: 500, monthlyUsage: 200, price: 40 },
  ]);
  return (
    <div className="container">
      <h1>Stock Analyzer</h1>
      <h2>Construction Materials</h2>
      <PredictionForm stocks={stocks} />
      <h2>Mess Stock</h2>
      <MstockPredictor stocks={stocks2} />
    </div>
  );
};
export default App;
