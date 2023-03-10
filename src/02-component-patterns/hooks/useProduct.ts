import { useState } from "react";
import { ProductHook, Product, OnChangesArgs } from "../interfaces/interfaces";

interface UseProductProps {
  product: Product;
  onChange?: (args: OnChangesArgs) => void;
}

export const useProduct = ({
  product,
  onChange,
}: UseProductProps): ProductHook => {
  const [counter, setCounter] = useState(0);

  const increaseBy = (value: number) => {
    const newCounter = Math.max(counter + value, 0);

    setCounter(newCounter);
    onChange && onChange({ product, count: newCounter });
  };
  return {
    counter,
    increaseBy,
  };
};
