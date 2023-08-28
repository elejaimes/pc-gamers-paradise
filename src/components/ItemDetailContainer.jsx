import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { getDocs, collection, getFirestore } from "firebase/firestore"

const ItemDetailContainer = () => {
  const [data, setData] = useState([])


  useEffect(() => {
    const db = getFirestore()
    const itemsCollection = collection(db, "products")
    getDocs(itemsCollection).then((querySnapshot) => {
      const items = querySnapshot.docs.map ((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
      setData(items)
    })
  }, []);

  /* const filteredProduct = products.find(
    (product) => product.id.toString() === productId
  ); */

  return <ItemDetail items={data} />
    /* <div>
      <h1>Productos</h1>
      {
        data.map((item) => (
          <div key={item.name}>
            <h3>producto: {item.name}</h3>
            <h4>Categoría: {item.category}</h4>
            <p>Precio: ${item.price}</p>
          </div>

        ))
      }
       {error ? (
        <div>Error: {error.message}</div>
      ) : filteredProduct ? (
        <ItemDetail product={filteredProduct} setCart={setCart} />
      ) : (
        <p>Producto no encontrado</p>
      )} 
    </div>
  );  */
}; 

export default ItemDetailContainer;
