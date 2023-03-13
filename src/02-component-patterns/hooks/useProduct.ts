import { useState, useEffect } from "react";
import { ProductHook, Product, OnChangesArgs } from "../interfaces/interfaces";

interface UseProductProps {
  product: Product;
  onChange?: (args: OnChangesArgs) => void;
  value?: number;
}

export const useProduct = ({
  product,
  onChange,
  value = 0,
}: UseProductProps): ProductHook => {
  const [counter, setCounter] = useState(value);

  const increaseBy = (value: number) => {
    const newCounter = Math.max(counter + value, 0);

    setCounter(newCounter);
    onChange && onChange({ product, count: newCounter });
  };

  useEffect(() => {
    setCounter(value);
  }, [value]);
  return {
    counter,
    increaseBy,
  };
};
