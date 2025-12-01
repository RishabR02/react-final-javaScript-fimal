import React, { useState } from 'react';

export default function ShoppingCart() {
  const [cart, setCart] = useState([]);
  const products = [
    { id: 1, name: 'Apple', price: 2 },
    { id: 2, name: 'Banana', price: 1 },
  ];
  const addToCart = (item) => setCart([...cart, item]);

  const total = cart.reduce((sum, { price }) => sum + price, 0);


  return (
    <div style={{ textAlign: 'center', padding: 20 }}>
      <h1>Shopping Cart</h1>
      {products.map(p => (
        <div key={p.id}>
          {p.name} - ${p.price} <button onClick={() => addToCart(p)}>Add</button>
        </div>
      ))}
      <h2>Cart Items:</h2>
      <ul>{cart.map((item, i) => <li key={i}>{item.name} - ${item.price}</li>)}</ul>
      <h3>Total: ${total}</h3>
    </div>
  );
}
