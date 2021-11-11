import React from "react";
import Products from "../../components/Products";
import { productData } from "../../components/Products/data";

export default function Product() {
  return (
    <>
      <Products heading="Our Products" data={productData} />
    </>
  );
}
