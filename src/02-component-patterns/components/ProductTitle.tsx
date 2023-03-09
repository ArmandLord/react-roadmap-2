import { useContext } from "react";
import { ProductContext } from "./ProductCart";
import styles from "../styles/styles.module.css";

export const ProductTitle = () => {
  const { product } = useContext(ProductContext);
  console.log(product);

  return <span className={styles.productDescription}>{product.title}</span>;
};
