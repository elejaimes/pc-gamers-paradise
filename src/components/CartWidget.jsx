import React from "react";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { Nav, Container, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const CartWidget = () => {
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
                  2
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
