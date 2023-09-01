import React from "react";
import { Card, ListGroup, Button, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Item = ({ product }) => {
  return (
    <Col xs={12} sm={6} md={4} lg={4} xl={3}>
      <Card className="mb-6">
        <Card.Img variant="top" src={product.picture} className="img-fluid" />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Precio: ${product.price}</ListGroup.Item>
        </ListGroup>
        <Card.Body className="d-flex justify-content-center">
          <LinkContainer to={`/item/${product.id}`}>
            <Button variant="secondary">Ver Detalle</Button>
          </LinkContainer>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default Item;
