import React, { useContext, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { AiOutlineShoppingCart, AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from 'react-icons/ai';
import { ShoppingCartContext } from '../contexts/ShoppingCartContext';

const ShoppingCart = () => {
  const { cart, setCart } = useContext(ShoppingCartContext);

  const handleAdd = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleSubtract = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  const handleRemove = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <AiOutlineShoppingCart size={50} />
        <Card.Title>Carrito de Compras</Card.Title>
      </Card.Body>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} x {item.quantity} = ${item.price * item.quantity}
            <Button variant="secondary" onClick={() => handleSubtract(item.id)}>
              <AiOutlineMinus />
            </Button>
            <span>{item.quantity}</span>
            <Button variant="secondary" onClick={() => handleAdd(item.id)}>
              <AiOutlinePlus />
            </Button>
            <Button variant="danger" onClick={() => handleRemove(item.id)}>
              <AiOutlineClose />
            </Button>
          </li>
        ))}
      </ul>
      <Card.Body>
        <p>Total: ${calculateTotal()}</p>
      </Card.Body>
    </Card>
  );
};

export default ShoppingCart;
