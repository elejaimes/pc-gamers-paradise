import {useContext} from 'react'
import { Button, Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { ShoppingCartContext } from '../contexts/ShoppingCartContext';

const ShoppingCart = () => {
    const { cart } = useContext(ShoppingCartContext)

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0)
    }
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <AiOutlineShoppingCart size={50} />
        <Card.Title>Carrito de Compras</Card.Title>
      </Card.Body>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} x {item.quantity} = ${item.price * item.quantity}
          </li>
        ))}
      </ul>
      <Card.Body>
        <p>Total: ${calculateTotal()}</p>
        <LinkContainer to={"/cart"}>
          <Button variant="primary">Ver Carrito</Button>
        </LinkContainer>
      </Card.Body>
    </Card>
  );
};

export default ShoppingCart