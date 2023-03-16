import { useState } from "react";
import { ProductInCart } from "../pages/ShoppingPage";
import { Product } from "../interfaces/interfaces";
ProductInCart;

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  // Creamos una funcion que actualiza el estado del carrito
  const onProductCartChange = ({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) => {
    // actualizamos el estado, obteniendo el estado anterior
    // y agregando el key de forma computada
    setShoppingCart((prev) => {
      const productInCart: ProductInCart = prev[product.id] || {
        ...product,
        count: 0,
      };
      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;
        return {
          ...prev,
          [product.id]: productInCart,
        };
      }
      // hacemos un desestructuracion del elemento que no queremos
      // obtenemos el que tenga cierta caracteristica y el restante
      // Muy importante asignarle un nombre ya que ese vamos a eliminar
      const { [product.id]: toDelete, ...rest } = prev;
      return rest;

      // De esta forma podemos 'eliminar' una propiedad
      // de un objeto sin utilizar el operador delete

      // if (count === 0) {
      //   const { [product.id]: toDelete, ...rest } = prev;
      //   return rest;
      // }

      // return {
      //   ...prev,
      //   [product.id]: { ...product, count },
      // };
    });
  };
  const cartMap = Object.values(shoppingCart);
  return {
    shoppingCart,
    cartMap,
    onProductCartChange,
  };
};
