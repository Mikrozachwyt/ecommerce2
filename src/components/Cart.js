import React from "react";

const Cart = ({ cartItems, onRemoveItem }) => {
    return (
        <div className="cart">
            <h2>Twój Koszyk</h2>
            {cartItems.length === 0 ? (
                <p>Twój koszyk jest pusty</p>
            ) : (
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index}>
                            {item.name} - {item.price} zł
                            <button onClick={() => onRemoveItem(index)}>Usuń</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;
