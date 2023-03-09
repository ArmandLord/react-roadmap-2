import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import { createContext } from "react";
import { Props, ProductContextProps } from "../interfaces/interfaces";
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";
import { ProductButtons } from "./ProductButtons";

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
