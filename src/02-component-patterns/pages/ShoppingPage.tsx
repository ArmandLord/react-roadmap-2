import ProductCart from "../components/ProductCart";

const product = {
  id: "1",
  title: "Wolf",
  img: "https://picsum.photos/200/200",
};

const ShoppingPage = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <ProductCart product={product}>
          <ProductCart.Image />
          <ProductCart.Title />
          <ProductCart.Buttons />
        </ProductCart>
      </div>
    </div>
  );
};

export default ShoppingPage;
