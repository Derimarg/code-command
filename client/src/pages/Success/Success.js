import React, { useEffect } from "react";
import { useMutation } from "@apollo/react-hooks";
import { ADD_ORDER } from "../../utils/mutations";
import { idbPromise } from "../../utils/helpers";

function Success() {
  const [addOrder] = useMutation(ADD_ORDER);

  useEffect(() => {
    async function saveOrder() {
      const cart = await idbPromise("cart", "get");
      const products = cart.map((item) => item._id);

      if (products.length) {
        const { data } = await addOrder({ variables: { products } });
        const productData = data.addOrder.products;

        productData.forEach((item) => {
          idbPromise("cart", "delete", item);
        });
      }

      setTimeout(() => {
        window.location.assign("/");
      }, 3000);
    }

    saveOrder();
  }, [addOrder]);

  return (
    <>
      <div
        style={{
          height: 560,
          clear: "both",
          paddingTop: 120,
          textAlign: "center",
        }}
      >
        <h1>Success!</h1>
        <h2>Thank you for your purchase!</h2>
        <h2>You will now be redirected to the home page</h2>
      </div>
    </>
  );
}

export default Success;
