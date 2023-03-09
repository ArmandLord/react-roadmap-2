import { CSSProperties, useContext } from "react";
import { ProductContext } from "./ProductCart";
import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";

export const ProductImage = ({
  customStyles,
}: {
  customStyles?: CSSProperties;
}) => {
  const { product } = useContext(ProductContext);

  return (
    <img
      className={styles.productImg}
      style={customStyles}
      src={product.img ? product.img : noImage}
      alt="coffee"
    />
  );
};
