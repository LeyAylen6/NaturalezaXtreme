import React, { useState, useEffect } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  // Cargar el carrito desde el Local Storage al cargar el componente
  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(savedCartItems);
  }, []);

  // Guardar el carrito en el Local Storage cuando se actualice
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // Función para agregar un producto al carrito
  const addToCart = (product) => {
    const updatedCart = [...cartItems, product];
    setCartItems(updatedCart);
  };

  // Función para eliminar un producto del carrito
  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
  };

  // Función para calcular el total de los productos en el carrito
  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - Cantidad: {item.quantity}
            <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <p>Total: ${calculateTotal()}</p>
    </div>
  );
};

export default Cart;


