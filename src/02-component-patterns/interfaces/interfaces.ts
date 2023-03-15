import { ReactElement } from "react";

export interface ProductHook {
  counter: number;
  increaseBy: (value: number) => void;
}

export interface OnChangesArgs {
  product: Product;
  count: number;
}

export interface InitialValue {
  count?: number;
  maxCount: number;
}

export interface Props {
  product: Product;
  // children: ReactElement | ReactElement[];
  children: (message: string) => ReactElement;
  className: string;
  customStyles?: React.CSSProperties;
  onChange?: (args: OnChangesArgs) => void;
  value?: number;
  initialValues?: InitialValue;
}

export interface Product {
  id: string;
  title: string;
  img?: string;
  count?: number;
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
