import { useCallback, useContext } from "react";
import { ProductContext } from "./ProductCart";
import styles from "../styles/styles.module.css";

export const ProductButtons = () => {
  const { increaseBy, counter, maxCount } = useContext(ProductContext);
  const isMaxReached = useCallback(
    () => !!maxCount && counter === maxCount,
    [counter, maxCount]
  );

  return (
    <div className={styles.buttonsContainer}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button
        disabled={isMaxReached() ? true : false}
        className={styles.buttonAdd}
        onClick={() => increaseBy(1)}
      >
        +
      </button>
    </div>
  );
};
