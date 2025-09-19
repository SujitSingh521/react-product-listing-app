import React from "react";

function ProductCard({ product }) {
  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.title} style={styles.img} />
      <h3>{product.title.substring(0, 20)}...</h3>
      <p>₹ {product.price}</p>
      <button style={styles.btn}>Add to Cart</button>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "15px",
    textAlign: "center",
    width: "200px",
  },
  img: {
    width: "100px",
    height: "100px",
    objectFit: "contain",
  },
  btn: {
    marginTop: "10px",
    padding: "5px 10px",
    background: "blue",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default ProductCard;
