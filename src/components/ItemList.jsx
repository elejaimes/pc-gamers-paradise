import React from "react";
import { Container, Row } from "react-bootstrap";
import Item from "./Item";

const ItemList = ({ data }) => {
  return (
    <Container>
      <Row className="d-flex justify-content-center">
        {data.map((p) => (
          <Item key={p.id} id={p.id} product={p} />
        ))}
      </Row>
    </Container>
  );
};

export default React.memo(ItemList);
