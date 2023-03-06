import ProductCart, {
  ProductImage,
  ProductButtons,
  ProductTitle,
} from "../components/ProductCart";

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
          <ProductImage />
          <ProductTitle title="prueba" />
          <ProductButtons
            counter={0}
            increaseBy={function (value: number): void {
              throw new Error("Function not implemented.");
            }}
          />
        </ProductCart>
      </div>
    </div>
  );
};

export default ShoppingPage;
