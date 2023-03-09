import { useContext } from "react";
import { ProductContext } from "./ProductCart";
import styles from "../styles/styles.module.css";

interface PorpsClassName {
  className?: string;
}

export const ProductTitle = ({ className }: PorpsClassName) => {
  const { product } = useContext(ProductContext);
  console.log(product);

  return (
    <span className={`${styles.productDescription} ${className}`}>
      {product.title}
    </span>
  );
};
