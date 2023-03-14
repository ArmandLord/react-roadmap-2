import { useState, useEffect, useRef } from "react";
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

  const { current } = useRef(!!onChange);

  const increaseBy = (value: number) => {
    if (current && onChange) {
      return onChange({ product, count: value });
    }
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
