import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, ListGroup } from "react-bootstrap";
/* import ItemCount from "./ItemCount"; */
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetail = ({ items }) => {
  const { id } = useParams()
  const [item, setItem] = useState([])

  useEffect(() => {
    const db = getFirestore()
    const item = doc(db, "products", "0LLn5vg22GDjTztGKivK")
    getDoc(item).then((snapshot) => {
      if(snapshot.exists()) {
        const docs = snapshot.data()
        setItem(docs)
      } else {
        console.log("Producto no encontrado")
      }
    })
  }, [])

  const itemFilter = items.filter((item) => item.id == id)

  return (
    <>
    {itemFilter.map((item) => (
      <div key={item.id}> 
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={item.picture} />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>{item.description}</ListGroup.Item>
            <ListGroup.Item>Categoría: {item.category}</ListGroup.Item>
            <ListGroup.Item>Precio: ${item.price}</ListGroup.Item>
            <ListGroup.Item>Disponibilidad: {item.stock}</ListGroup.Item>
          </ListGroup>
{/*           <Card.Body>
            <ItemCount key={product.id} stock={product.stock} setCart={setCart} />
          </Card.Body> */}
        </Card>
      </div>


    ))}
    
    
    </>
  );
};

export default React.memo(ItemDetail)
