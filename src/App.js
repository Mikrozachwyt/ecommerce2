import React, { useState, useEffect } from "react";
import ProductList from "./components/ProductList";
import FilterBar from "./components/FilterBar";
import Login from "./components/Login";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(savedUser);
      const savedCart = JSON.parse(localStorage.getItem(savedUser + "_cart")) || [];
      setCart(savedCart);
    }
  }, []);

  const handleLogin = (username) => {
    setUser(username);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem(user + "_cart");
  };

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    localStorage.setItem(user + "_cart", JSON.stringify(newCart));
  };

  const handleRemoveFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
    localStorage.setItem(user + "_cart", JSON.stringify(newCart));
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Vape Shop</h1>
        {user ? (
          <button onClick={handleLogout}>Wyloguj</button>
        ) : (
          <Login onLogin={handleLogin} />
        )}
      </header>

      <main>
        {user ? (
          <div>
            <Cart cartItems={cart} onRemoveItem={handleRemoveFromCart} />
            <h2>Produkty</h2>
            <ProductList onAddToCart={handleAddToCart} />
          </div>
        ) : (
          <p>Proszę się zalogować, aby dodać produkty do koszyka.</p>
        )}
      </main>
    </div>
  );
}

export default App;
