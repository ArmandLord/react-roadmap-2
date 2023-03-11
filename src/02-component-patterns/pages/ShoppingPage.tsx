import ProductCart from "../components/ProductCart";
import "../styles/custom-styles.css";
import { useState } from "react";
import { OnChangesArgs, Product } from "../interfaces/interfaces";

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
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  // Creamos una funcion que actualiza el estado del carrito
  const onProductCartChange = ({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) => {
    // actualizamos el estado, obteniendo el estado anterior
    // y agregando el key de forma computada
    setShoppingCart((prev) => {
      return {
        ...prev,
        [product.id]: { ...product, count },
      };
    });
    console.log("onProductCartChange", product, count);
  };
  const a = Object.values(shoppingCart);
  console.log(a);

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
          <ProductCart
            key={product.id}
            onChange={onProductCartChange}
            className="bg-dark"
            product={product}
          >
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
      <pre>
        {a.map((a) => (
          <h1>{a.count}</h1>
        ))}
      </pre>
    </div>
  );
};

export default ShoppingPage;
