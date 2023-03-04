import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";
import { useProduct } from "../hooks/useProduct";
import { ReactElement } from "react";

interface Props {
  product: Product;
  children: ReactElement | ReactElement[];
}

interface Product {
  id: string;
  title: string;
  img?: string;
}

export const ProductImage = ({ img = "" }) => (
  <img className={styles.productImg} src={img ? img : noImage} alt="coffee" />
);
interface Title {
  title: string;
}
export const ProductTitle = ({ title }: Title) => (
  <span className={styles.productDescription}>{title}</span>
);
interface Buttons {
  counter: number;
  increaseBy: (value: number) => void;
}
export const ProductButtons = ({ counter, increaseBy }: Buttons) => (
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
const ProductCart = ({ product, children }: Props) => {
  // customHook 🚨
  const { counter, increaseBy } = useProduct();
  return (
    <>
      <div className={styles.productCard}>
        {/* <img className={styles.productImg} src="./coffee-mug.png" alt="coffee" /> */}
        {/* <ProductImage img="https://picsum.photos/200" />
        <ProductTitle title={product.title} />
        <ProductButtons counter={counter} increaseBy={increaseBy} /> */}
        {children}
      </div>
    </>
  );
};

export default ProductCart;
