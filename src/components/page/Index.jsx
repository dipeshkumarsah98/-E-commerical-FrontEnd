import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import productListStore from "../../store/ProductListStore";
import CardList from "../common/CardList";
import Pic1 from "../../img/bag3.jpeg";

const Index = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    await productListStore.getProducts();
    const { data } = toJS(productListStore.productList);
    const productItems = data?.map((item) => {
      return {
        id: item._id,
        title: item.title,
        category: item.category.name,
        img: item.image || Pic1,
        price: item.price,
      };
    });
    setProducts(productItems);
  };

  return <CardList products={products} />;
};

export default observer(Index);
