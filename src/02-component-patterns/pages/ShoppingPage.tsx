import ProductCart from "../components/ProductCart";

const product = {
  id: "1",
  title: "Wolf",
  img: "https://picsum.photos/200",
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
        <ProductCart product={product} />
      </div>
    </div>
  );
};

export default ShoppingPage;
