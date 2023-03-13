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
      // De esta forma podemos 'eliminar' una propiedad
      // de un objeto sin utilizar el operador delete
      if (count === 0) {
        const { [product.id]: toDelete, ...rest } = prev;
        return rest;
      }

      return {
        ...prev,
        [product.id]: { ...product, count },
      };
    });
  };
  const cartMap = Object.values(shoppingCart);
  console.log(cartMap);

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
            value={shoppingCart[product.id]?.count || 0}
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
        {cartMap?.map((product) => (
          <ProductCart
            key={product.id}
            className="bg-dark"
            product={product}
            onChange={onProductCartChange}
            // con la propiedad value podemos controlar el estado del componente
            value={product.count}
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
        ))}
      </div>
    </div>
  );
};

export default ShoppingPage;
