import { ReactElement } from "react";

export interface Product {
  counter: number;
  increaseBy: (value: number) => void;
}

export interface Props {
  product: Product;
  children: ReactElement | ReactElement[];
}

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}

export interface Title {
  title: string;
}

export interface Buttons {
  counter: number;
  increaseBy: (value: number) => void;
}
