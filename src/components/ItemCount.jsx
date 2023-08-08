import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { AiOutlinePlus , AiOutlineClose, AiOutlineMinus } from "react-icons/ai";

const ItemCount = ({ stock }) => {
  const [contador, setContador] = useState(0);

  const add = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const subtract = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  const reset = () => {
    setContador (0)
  }

  return (
    <div>
      <Button variant="secondary" onClick={subtract} disabled={contador === 0}>
        <AiOutlineMinus />
      </Button>
      <span>{contador}</span>
      <Button variant="secondary" onClick={add} disabled={contador === stock}>
        <AiOutlinePlus />
      </Button>
      <Button variant="danger" onClick={reset}>
        <AiOutlineClose />
      </Button>
    </div>
  );
};

export default ItemCount;
