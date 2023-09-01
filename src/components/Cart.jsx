import React, { useState, useContext } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
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
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <ShoppingCart />
          <div className="text-center mt-3">
            <Button variant="light" onClick={() => setShowForm(true)}>
              Comprar
            </Button>
            <Button variant="secondary" onClick={handleEmptyCart} className="ms-3">
              Vaciar Carrito
            </Button>
          </div>
          {showForm && <PurchaseForm cart={cart} onPurchaseSuccess={handleEmptyCart} />}
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
