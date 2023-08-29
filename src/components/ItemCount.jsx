import { useContext, useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { AiOutlinePlus, AiOutlineClose, AiOutlineMinus } from "react-icons/ai";
import { ShoppingCartContext } from "../contexts/ShoppingCartContext";
import Swal from "sweetalert2";

const ItemCount = ({ stock, id, name, price }) => {
  const [count, setCount] = useState(0);
  const { cart, setCart } = useContext(ShoppingCartContext);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, [setCount]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const add = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const subtract = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  const addToCart = () => {
    if (count > 0) {
      setCart((currentItems) => {
        const isItemFound = currentItems.find((item) => item.id === id);
        if (isItemFound) {
          return currentItems.map((item) => {
            if (item.id === id) {
              return { ...item, quantity: item.quantity + count };
            } else {
              return item;
            }
          });
        } else {
          return [
            ...currentItems,
            { id, quantity: count, price, name },
          ];
        }
      });
      reset();
      
      // Mostrar SweetAlert
      const alertText =
        count === 1 ? `${name} agregado al carrito.` : `${count} ${name} agregados al carrito.`;
      Swal.fire({
        title: "¡Agregado al Carrito!",
        text: alertText,
        icon: "success",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div>
      <Button variant="secondary" onClick={subtract} disabled={count === 0}>
        <AiOutlineMinus />
      </Button>
      <span>{count}</span>
      <Button variant="secondary" onClick={add} disabled={count === stock}>
        <AiOutlinePlus />
      </Button>
      <Button variant="danger" onClick={reset}>
        <AiOutlineClose />
      </Button>
      <Button variant="primary" onClick={addToCart}>
        Agregar al Carrito
      </Button>
    </div>
  );
};

export default ItemCount;