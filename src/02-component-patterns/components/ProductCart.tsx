import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import { createContext } from "react";
import {
  Props,
  ProductContextProps,
  InitialValue,
} from "../interfaces/interfaces";
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";
import { ProductButtons } from "./ProductButtons";

export const ProductContext = createContext({} as ProductContextProps);

const ProductCart = ({
  product,
  children,
  className,
  customStyles,
  onChange,
  value,
  initialValues,
}: Props) => {
  const { counter, increaseBy, maxCount } = useProduct({
    product,
    onChange,
    value,
    initialValues,
  });

  const { Provider } = ProductContext;
  // customHook 🚨
  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
        maxCount,
      }}
    >
      <div
        style={customStyles}
        className={`${styles.productCard} ${className}`}
      >
        {children("Funciona")}
      </div>
    </Provider>
  );
};

ProductCart.Title = ProductTitle;
ProductCart.Image = ProductImage;
ProductCart.Buttons = ProductButtons;
export default ProductCart;
