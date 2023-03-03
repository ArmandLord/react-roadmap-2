import ProductCart from "../components/ProductCart";

const product = [];

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
        <ProductCart />
      </div>
    </div>
  );
};

export default ShoppingPage;
