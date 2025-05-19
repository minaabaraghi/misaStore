"use client";
import { createContext, useContext, useEffect, useState } from "react";

type ShoppingCartContextType = { children: React.ReactNode };

type CartItems = {
  id: number;
  qty: number;
};

type TShoppingCartContextType = {
  cartItems: CartItems[];
  handleIncreaseProduct: (id: number) => void;
  handleDecreaseProduct: (id: number) => void;
  getProductQty: (id: number) => number;
};

const ShoppingCartContext = createContext({} as TShoppingCartContextType);

export const useShoppingCartContext = () => {
  return useContext(ShoppingCartContext);
};

export const ShoppingCartProvider = ({ children }: ShoppingCartContextType) => {
  const [cartItems, setCartItems] = useState<CartItems[]>([]);
  const getProductQty = (id: number) => {
    return cartItems.find((item) => item.id == id)?.qty || 0;
  };
  const handleIncreaseProduct = (id: number) => {
    setCartItems((currentItems) => {
      const isNotProductExist =
        currentItems.find((item) => item.id == id) == null;
      if (isNotProductExist) {
        return [...currentItems, { id: id, qty: 1 }];
      } else {
        return currentItems.map((item) => {
          if (item.id == id) {
            return { ...item, qty: item.qty + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const handleDecreaseProduct = (id: number) => {
    setCartItems((currentItems) => {
      const isLastOne = currentItems.find((item) => item.id == id)?.qty == 1;
      if (isLastOne) {
        return currentItems.filter((item) => item.id != id);
      } else {
        return currentItems.map((item) => {
          if (item.id == id) {
            return { ...item, qty: item.qty - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  useEffect(() => {
    const stored = localStorage.getItem("cartItems");
    setCartItems(JSON.parse(stored || "[]"));
  }, []);
  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        getProductQty,
        handleIncreaseProduct,
        handleDecreaseProduct,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
