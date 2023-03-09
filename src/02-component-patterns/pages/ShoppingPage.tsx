import ProductCart from "../components/ProductCart";
import "../styles/custom-styles.css";

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
    </div>
  );
};

export default ShoppingPage;
