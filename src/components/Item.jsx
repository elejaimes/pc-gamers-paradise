import React from "react";
import { Card, ListGroup, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Item = ({ product }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Precio: ${product.price}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <LinkContainer to={`/item/${product.id}`}>
          <Button variant="primary">Ver Detalle</Button>
        </LinkContainer>
      </Card.Body>
    </Card>
  );
};

export default Item;
