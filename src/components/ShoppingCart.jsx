import React, { useContext } from 'react';
import { Card, Button, ListGroup, Row, Col } from 'react-bootstrap';
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from 'react-icons/ai';
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
    <Card style={{ width: '20rem', margin: '20px auto', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <Card.Body>
        <Card.Title className="text-center">Carrito de Compras</Card.Title>
      </Card.Body>
      <ListGroup variant="flush">
        {cart.map((item) => (
          <ListGroup.Item key={item.id}>
            <Row className="align-items-center justify-content-between">
              <Col xs={6}>
                <h6>{item.name}</h6>
              </Col>
              <Col xs={6} className="text-end">
                <Button variant="danger" size="sm" onClick={() => handleRemove(item.id)}>
                  <AiOutlineClose />
                </Button>
                <Button variant="secondary" size="sm" onClick={() => handleSubtract(item.id)} disabled={item.quantity === 0}>
                  <AiOutlineMinus />
                </Button>
                <span className="mx-2">{item.quantity}</span>
                <Button variant="secondary" size="sm" onClick={() => handleAdd(item.id)} disabled={item.quantity === item.stock}>
                  <AiOutlinePlus />
                </Button>
              </Col>
            </Row>
            <hr className="my-2" />
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Card.Body className="text-center">
        <p className="mb-0">Total: ${calculateTotal()}</p>
      </Card.Body>
    </Card>
  );
};

export default ShoppingCart;
