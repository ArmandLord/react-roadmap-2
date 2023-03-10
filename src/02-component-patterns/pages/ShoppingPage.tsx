import ProductCart from "../components/ProductCart";
import "../styles/custom-styles.css";
import { useState } from "react";
import { Product } from "../interfaces/interfaces";

const products = [
  {
    id: "1",
    title: "Wolf",
    img: "https://picsum.photos/200/200",
  },
  {
    id: "2",
    title: "Tiger",
    img: "https://picsum.photos/200/200",
  },
];

export interface ProductInCart extends Product {
  count: number;
}

const ShoppingPage = () => {
  const [shopping, setShopping] = useState<{ [key: string]: ProductInCart }>(
    {}
  );
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {products.map((product) => (
          <ProductCart key={product.id} className="bg-dark" product={product}>
            <ProductCart.Image
              customStyles={{
                borderRadius: "50%",
              }}
            />
            <ProductCart.Title className="text-white" />
            <ProductCart.Buttons />
          </ProductCart>
        ))}
      </div>
      <div className="shopping-cart">
        <ProductCart
          key={products[0].id}
          className="bg-dark"
          product={products[0]}
          customStyles={{
            width: "100px",
          }}
        >
          <ProductCart.Image
            customStyles={{
              borderRadius: "50%",
            }}
          />
          {/* <ProductCart.Title className="text-white" /> */}
          <ProductCart.Buttons />
        </ProductCart>
        <ProductCart
          key={products[1].id}
          className="bg-dark"
          product={products[1]}
          customStyles={{
            width: "100px",
          }}
        >
          <ProductCart.Image
            customStyles={{
              borderRadius: "50%",
            }}
          />
          {/* <ProductCart.Title className="text-white" /> */}
          <ProductCart.Buttons />
        </ProductCart>
      </div>
    </div>
  );
};

export default ShoppingPage;
