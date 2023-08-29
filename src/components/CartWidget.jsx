import { useContext } from "react";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { Nav, Container, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { ShoppingCartContext } from "../contexts/ShoppingCartContext";


const CartWidget = () => {
  const { cart } = useContext(ShoppingCartContext);
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  return (
    <Nav>
      <LinkContainer to={"/cart"}>
        <Nav.Link>
          <Container>
            <Row>
              <Col xs={2} lg={8} className="d-flex align-items-center">
                <LiaShoppingCartSolid size={50} />
              </Col>
              <Col xs={1} lg={4} className="position-relative">
                <p className="position-absolute top-50 start-0 translate-middle badge bg-danger rounded-circle">
                {totalQuantity}
                </p>
              </Col>
            </Row>
          </Container>
        </Nav.Link>
      </LinkContainer>
    </Nav>
  );
};

export default CartWidget;
