import React from "react";
import { Card, ListGroup, Button } from "react-bootstrap";
import ItemCount from "./ItemCount";

const ItemDetail = ({ product }) => {
  return (
    <div key={product.id}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Tipo: {product.type}</ListGroup.Item>
          <ListGroup.Item>Categoría: {product.category}</ListGroup.Item>
          <ListGroup.Item>Precio: ${product.price}</ListGroup.Item>
          <ListGroup.Item>Disponibilidad: {product.stock}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <ItemCount stock={product.stock} />
          <Button variant="primary">Agregar al Carrito</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemDetail;
