import { createContext } from "react";

interface ImageContext {
  image: string;
  smallImage: () => void;
}

const ImageContext = createContext({} as ImageContext);
export default ImageContext;
