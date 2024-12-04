import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-description">{product.description}</p>
      <p className="product-price">{product.price} zł</p>
      <div className="product-tags">
        {product.tags.map((tag, index) => (
          <span key={index} className="product-tag">
            {tag}
          </span>
        ))}
      </div>
      <button className="product-button" onClick={() => onAddToCart(product)}>
        Dodaj do koszyka
      </button>
    </div>
  );
};

export default ProductCard;
