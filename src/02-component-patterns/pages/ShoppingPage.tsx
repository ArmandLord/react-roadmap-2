import ProductCart from "../components/ProductCart";
import "../styles/custom-styles.css";
import { Product } from "../interfaces/interfaces";
import { products } from "../data/products";

const product = products[0];
const ShoppingPage = () => {
  return (
    <div>
      <h1>Product:</h1>
      <hr />
      <div>
        <ProductCart
          // key={product.id}
          className="bg-dark"
          product={product}
          initialValues={{
            count: 4,
            maxCount: 10,
          }}
        >
          <ProductCart.Image
            customStyles={{
              borderRadius: "50%",
            }}
          />
          <ProductCart.Title className="text-white" />
          <ProductCart.Buttons />
        </ProductCart>
      </div>
    </div>
  );
};

export default ShoppingPage;
