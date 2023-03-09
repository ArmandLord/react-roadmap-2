import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";
import { useProduct } from "../hooks/useProduct";
import { createContext, useContext } from "react";
import { Props, ProductContextProps } from "../interfaces/interfaces";

export const ProductImage = () => {
  const { product } = useContext(ProductContext);

  return (
    <img
      className={styles.productImg}
      src={product.img ? product.img : noImage}
      alt="coffee"
    />
  );
};

export const ProductTitle = () => {
  const { product } = useContext(ProductContext);
  console.log(product);

  return <span className={styles.productDescription}>{product.title}</span>;
};
export const ProductButtons = () => {
  const { increaseBy, counter } = useContext(ProductContext);
  return (
    <div className={styles.buttonsContainer}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button className={styles.buttonAdd} onClick={() => increaseBy(1)}>
        +
      </button>
    </div>
  );
};

export const ProductContext = createContext({} as ProductContextProps);

const ProductCart = ({ product, children }: Props) => {
  const { counter, increaseBy } = useProduct();

  const { Provider } = ProductContext;
  // customHook 🚨
  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
};

ProductCart.Title = ProductTitle;
ProductCart.Image = ProductImage;
ProductCart.Buttons = ProductButtons;
export default ProductCart;
