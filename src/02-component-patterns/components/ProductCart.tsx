import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";
import { useProduct } from "../hooks/useProduct";
import { ReactElement, createContext, useContext } from "react";

interface Props {
  product: Product;
  children: ReactElement | ReactElement[];
}

interface Product {
  id: string;
  title: string;
  img?: string;
}

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
interface Title {
  title: string;
}
export const ProductTitle = () => {
  const { product } = useContext(ProductContext);
  console.log(product);

  return <span className={styles.productDescription}>{product.title}</span>;
};
interface Buttons {
  counter: number;
  increaseBy: (value: number) => void;
}
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

interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}
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
      <div className={styles.productCard}>
        {/* <img className={styles.productImg} src="./coffee-mug.png" alt="coffee" /> */}
        {/* <ProductImage img="https://picsum.photos/200" />
        <ProductTitle title={product.title} />
        <ProductButtons counter={counter} increaseBy={increaseBy} /> */}
        {children}
      </div>
    </Provider>
  );
};

ProductCart.Title = ProductTitle;
ProductCart.Image = ProductImage;
ProductCart.Buttons = ProductButtons;
export default ProductCart;
