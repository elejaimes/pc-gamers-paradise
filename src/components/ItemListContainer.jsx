import ItemList from "./ItemList";
import Loader from "./Loader";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDocs, collection, getFirestore } from "firebase/firestore";

const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { category } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "products");

    getDocs(itemsCollection)
      .then((querySnapshot) => {
        const items = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        if (category) {
          const filteredItems = items.filter((item) => item.category === category);
          setData(filteredItems);
        } else {
          setData(items);
        }

        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [category]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <ItemList data={data} />
    </div>
  );
};

export default ItemListContainer;