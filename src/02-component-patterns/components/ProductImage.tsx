import { useContext } from "react";
import { ProductContext } from "./ProductCart";
import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";

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
