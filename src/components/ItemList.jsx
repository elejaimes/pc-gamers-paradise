import React from "react";
import Item from "./Item";

const ItemList = ({ data }) => {
  return (
    <>
      {data.map((p) => (
        <Item key={p.id} id={p.id} product={p} />
      ))}
    </>
  );
};

export default React.memo(ItemList)
