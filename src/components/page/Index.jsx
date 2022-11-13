import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import productListStore from "../../store/ProductListStore";
import CardList from "../common/CardList";
import Pic1 from "../../img/bag3.jpeg";
import Pic2 from "../../img/bag1.webp";
import Pic3 from "../../img/bag2.webp";
import Pic4 from "../../img/bag4.jpg";
import Pic5 from "../../img/bag5.jpg";

const Index = () => {
  const [products, setProducts] = useState([]);
  const image = [Pic1, Pic2, Pic3, Pic4, Pic5];

  useEffect(() => {
    getProducts();
  }, []);

  const getRandomPic = (arr) => {
    const length = arr.length;
    return arr[Math.floor(Math.random() * length)];
  };
  const getProducts = async () => {
    await productListStore.getProducts();
    const { data } = toJS(productListStore.productList);

    const productItems = data?.map((item) => {
      return {
        id: item._id,
        title: item.title,
        category: item.category.name,
        img: item.image || getRandomPic(image),
        price: item.price,
        quantity: 1,
      };
    });
    setProducts(productItems);
  };

  return <CardList products={products} />;
};

export default observer(Index);
