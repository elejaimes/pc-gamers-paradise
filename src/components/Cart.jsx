import React, { useState, useContext } from 'react';
import { Button } from 'react-bootstrap';
import PurchaseForm from './PurchaseForm';
import ShoppingCart from './ShoppingCart';
import { ShoppingCartContext } from '../contexts/ShoppingCartContext';

const Cart = () => {
  const [showForm, setShowForm] = useState(false);
  const { cart, setCart } = useContext(ShoppingCartContext);

  const handleEmptyCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
  };

  return (
    <div>
      <ShoppingCart />
      <Button variant="primary" onClick={() => setShowForm(true)}>Comprar</Button>
      <Button variant="secondary" onClick={handleEmptyCart}>Vaciar Carrito</Button>
      {showForm && <PurchaseForm cart={cart} onPurchaseSuccess={handleEmptyCart} />}
    </div>
  );
};

export default Cart;