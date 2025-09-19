import React from "react";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>MyShop</div>
      <div style={styles.links}>
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/about">About</a>
      </div>
      <div style={styles.cart}>🛒</div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    background: "#222",
    color: "#fff",
  },
  logo: { fontWeight: "bold", fontSize: "20px" },
  links: { display: "flex", gap: "15px" },
  cart: { cursor: "pointer" },
};

export default Navbar;
