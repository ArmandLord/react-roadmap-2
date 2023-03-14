import { useState, useEffect, useRef } from "react";
import {
  ProductHook,
  Product,
  OnChangesArgs,
  InitialValue,
} from "../interfaces/interfaces";

interface UseProductProps {
  product: Product;
  onChange?: (args: OnChangesArgs) => void;
  value?: number;
  initialValues?: InitialValue;
}

export const useProduct = ({
  product,
  onChange,
  value = 0,
  initialValues,
}: UseProductProps): ProductHook => {
  const [counter, setCounter] = useState(initialValues?.count || value);

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
