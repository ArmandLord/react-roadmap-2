import { useState } from "react";
import { ProductHook } from "../interfaces/interfaces";

export const useProduct = (): ProductHook => {
  const [counter, setCounter] = useState(0);

  const increaseBy = (value: number) => {
    setCounter((prev) => Math.max(prev + value, 0));
  };
  return {
    counter,
    increaseBy,
  };
};
