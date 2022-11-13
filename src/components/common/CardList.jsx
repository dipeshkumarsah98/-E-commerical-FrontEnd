import React from "react";
import Card from "./Card";

import cartStore from "../../store/CartStore";

const CardList = ({ products }) => {
  const addIntoCart = (id) => {
    const item = products.find((element) => element.id === id);
    cartStore.addItem(item);
  };

  return (
    <div className="container my-10 grid grid-cols md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
      {products.map((product, index) => (
        <Card
          addToCart={addIntoCart}
          index={index}
          key={product.id}
          id={product.id}
          title={product.title}
          category={product.category}
          price={product.price}
          img={product.img}
        />
      ))}
    </div>
  );
};

export default CardList;
