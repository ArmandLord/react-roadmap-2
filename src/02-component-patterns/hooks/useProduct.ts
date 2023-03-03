import { useState } from "react";
import { Product } from "../interfaces/interfaces";

export const useProduct = (): Product => {
  const [counter, setCounter] = useState(0);

  const increaseBy = (value: number) => {
    setCounter((prev) => Math.max(prev + value, 0));
  };
  return {
    counter,
    increaseBy,
  };
};
