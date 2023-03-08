import ImageContext from "./ImageContext";
import { useState, PropsWithChildren } from "react";

const ImageStateContext = ({ children }: PropsWithChildren) => {
  const [image, setImage] = useState("https://picsum.photos/300/300");
  const smallImage = () => {
    setImage("https://picsum.photos/200/200");
  };
  return (
    <ImageContext.Provider
      value={{
        image,
        smallImage,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};

export default ImageStateContext;
