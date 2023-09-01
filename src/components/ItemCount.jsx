import React, { useContext, useState, useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { AiOutlinePlus, AiOutlineClose, AiOutlineMinus } from "react-icons/ai";
import { ShoppingCartContext } from "../contexts/ShoppingCartContext";
import Swal from "sweetalert2";

const ItemCount = ({ stock, id, name, price }) => {
  const [count, setCount] = useState(0);
  const { cart, setCart } = useContext(ShoppingCartContext);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, [setCount]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const add = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const subtract = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  const addToCart = () => {
    if (count > 0) {
      const currentQuantityInCart = cart.reduce((total, item) => {
        if (item.id === id) {
          return total + item.quantity;
        }
        return total;
      }, 0);
  
      const totalQuantityInCart = currentQuantityInCart + count;
  
      if (totalQuantityInCart > stock) {
        Swal.fire({
          title: "Stock Agotado",
          text: `El stock máximo para ${name} es ${stock}.`,
          icon: "error",
          confirmButtonText: "OK",
        });
      } else {
        setCart((currentItems) => {
          const isItemFound = currentItems.find((item) => item.id === id);
          if (isItemFound) {
            return currentItems.map((item) => {
              if (item.id === id) {
                return { ...item, quantity: item.quantity + count };
              } else {
                return item;
              }
            });
          } else {
            return [
              ...currentItems,
              { id, quantity: count, price, name, stock },
            ];
          }
        });
        reset();
  
        // Mostrar SweetAlert
        const alertText =
          count === 1 ? `${name} agregado al carrito.` : `${count} ${name} agregados al carrito.`;
        Swal.fire({
          title: "¡Agregado al Carrito!",
          text: alertText,
          icon: "success",
          confirmButtonText: "OK",
        });
      }
    }
  };

  return (
    <Container className="card-container">
      <Row className="justify-content-center">
        <Card className="card">
          <Card.Body>
            <Row className="align-items-center justify-content-between card-body-row">
              <Col xs={2} className="button-col">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={subtract}
                  disabled={count === 0}
                >
                  <AiOutlineMinus />
                </Button>
              </Col>
              <Col xs={2} className="text-center-col">
                <span className="text-count">{count}</span>
              </Col>
              <Col xs={2} className="button-col">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={add}
                  disabled={count === stock}
                >
                  <AiOutlinePlus />
                </Button>
              </Col>
              <Col xs={2} className="button-col">
                <Button variant="danger" size="sm" onClick={reset}>
                  <AiOutlineClose />
                </Button>
              </Col>
            </Row>
          </Card.Body>
          <Card.Footer className="text-center card-footer">
            <Button variant="primary" onClick={addToCart}>
              Agregar al Carrito
            </Button>
          </Card.Footer>
        </Card>
      </Row>
    </Container>
  );
};

export default ItemCount;
