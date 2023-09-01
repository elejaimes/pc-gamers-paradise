import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, ListGroup, Container, Row, Col } from "react-bootstrap";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Loader from "./Loader";
import ItemCount from "./ItemCount";

const ItemDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemDoc = doc(db, "products", id);

    getDoc(itemDoc)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setProduct([{ ...snapshot.data(), id: snapshot.id }]);
        } else {
          console.log("Producto no encontrado");
        }
      })
      .catch((error) => {
        console.error("Error al obtener el producto:", error);
      });
  }, [id]);

  if (product.length === 0) {
    return <Loader />;
  }

  return (
    <Container className="card-container">
      <Row className="justify-content-center">
        <Card className="card">
          <Card.Img className="card-img" variant="top" src={product[0].picture} />
          <Card.Body>
            <Card.Title className="card-title">{product[0].name}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush list-group">
            <ListGroup.Item className="list-group-item">{product[0].description}</ListGroup.Item>
            <ListGroup.Item className="list-group-item">Categoría: {product[0].category}</ListGroup.Item>
            <ListGroup.Item className="list-group-item">Precio: ${product[0].price}</ListGroup.Item>
            <ListGroup.Item className="list-group-item">Disponibilidad: {product[0].stock}</ListGroup.Item>
          </ListGroup>
          <ItemCount
            stock={product[0].stock}
            id={product[0].id}
            name={product[0].name}
            price={product[0].price}
            className="item-count-container"
          />
        </Card>
      </Row>
    </Container>
  );
};

export default ItemDetail;
