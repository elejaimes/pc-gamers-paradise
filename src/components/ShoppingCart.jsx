import React, { useContext } from 'react';
import { Card, Button, ListGroup, Row, Col } from 'react-bootstrap';
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from 'react-icons/ai';
import { ShoppingCartContext } from '../contexts/ShoppingCartContext';
import Swal from 'sweetalert2';

const ShoppingCart = () => {
  const { cart, setCart } = useContext(ShoppingCartContext);

  const handleAdd = (id, stock) => {
    const item = cart.find((item) => item.id === id);
    if (item.quantity < stock) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      Swal.fire({
        title: 'Error',
        text: `No puedes agregar más de ${stock} elementos al carrito.`,
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };

  const handleSubtract = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item
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
    <Card className="cart-card">
      <Card.Body>
        <Card.Title className="card-title-center">Carrito de Compras</Card.Title>
      </Card.Body>
      <ListGroup variant="flush">
        {cart.map((item) => (
          <ListGroup.Item key={item.id}>
            <Row className="list-group-item-row">
              <Col xs={6}>
                <h6>{item.name}</h6>
              </Col>
              <Col xs={6} className="text-end-col">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => handleSubtract(item.id)}
                  disabled={item.quantity === 0}
                >
                  <AiOutlineMinus />
                </Button>
                <span className="mx-4">{item.quantity}</span>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => handleAdd(item.id, item.stock)}
                  disabled={item.quantity >= item.stock}
                >
                  <AiOutlinePlus />
                </Button>
                <Button
                  className="delete-button"
                  variant="danger"
                  size="sm"
                  onClick={() => handleRemove(item.id)}
                >
                  <AiOutlineClose />
                </Button>
              </Col>
            </Row>
            <hr className="my-2-hr" />
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Card.Body className="text-center-body">
        <p className="mb-0-p">Total: ${calculateTotal().toFixed(2)}</p>
      </Card.Body>
    </Card>
  );
};

export default ShoppingCart;
