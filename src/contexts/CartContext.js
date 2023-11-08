import React, { useState, useEffect, createContext } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const [itemAmount, setItemAmount] = useState(0);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const total = cart.reduce((acc, currItem) => {
      return acc + currItem.price * currItem.amount;
    }, 0);
    setTotal(total);
  }, [cart]);

  useEffect(() => {
    const amount = cart.reduce((acc, curr) => {
      return acc + curr.amount;
    }, 0);
    setItemAmount(amount);
  }, [cart]);

  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    const cartItem = cart.find((item) => {
      return id === item.id;
    });

    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  const increaseAmount = (id) => {
    const newCart = cart.find((item) => {
      return item.id === id;
    });
    addToCart(newCart, id);
  };
  const clearCart = () => {
    setCart([]);
  };
  const decreaseAmount = (id, product) => {
    const newCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, amount: product.amount - 1 };
      } else {
        return item;
      }
    });
    setCart(newCart);
    if (product.amount < 2) {
      removeFromCart(id);
    }
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
