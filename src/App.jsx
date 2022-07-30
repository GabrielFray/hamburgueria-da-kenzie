// import { useState, useEffect } from "react";
import Header from "./Header";
import ProductList from "./ProductList";
import Cart from "./Cart";
import api from "./services/api";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

import "./App.css";
import "animate.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);

  useEffect(() => {
    api
      .get("")
      .then((res) => {
        setProducts(res.data);
        setFilteredProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="App">
      <Header
        filteredProducts={filteredProducts}
        setFilteredProducts={setFilteredProducts}
        products={products}
      />
      <div className="mainContent">
        <ProductList
          products={products}
          setCurrentSale={setCurrentSale}
          currentSale={currentSale}
          filteredProducts={filteredProducts}
        />
        <Cart currentSale={currentSale} setCurrentSale={setCurrentSale} />
        <div>
          <Toaster />
        </div>
      </div>
    </div>
  );
};

export default App;
