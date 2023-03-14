import ProductCart from "../components/ProductCart";
import "../styles/custom-styles.css";
import { Product } from "../interfaces/interfaces";
import { products } from "../data/products";
import { useShoppingCart } from "../hooks/useChoppingCart";

export interface ProductInCart extends Product {
  count: number;
}

const ShoppingPage = () => {
  const { cartMap, shoppingCart, onProductCartChange } = useShoppingCart();

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
