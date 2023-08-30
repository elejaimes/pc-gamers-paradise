import React from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "products");

    getDocs(itemsCollection)
      .then((querySnapshot) => {
        const items = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setData(items);
      })
      .catch((error) => {
        console.error("Error al obtener la lista de productos:", error);
      });
  }, []);

  return (
    <ItemDetail product={data.find((item) => item.id === id)} />
  );
};

export default ItemDetailContainer;
