import { createContext, useState } from "react";
// import axios from "axios";

// eslint-disable-next-line react-refresh/only-export-components
export const dataContext = createContext();

// eslint-disable-next-line react/prop-types
const DataProvider = ({ children }) => {
  // const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);

  const addCart = (product) => {
    const productRepeat = cart.find((item) => item.id === product.id);

    if (productRepeat) {
      setCart(cart.map((item) => (item.id === product.id ? { ...product, quantity: productRepeat.quantity + 1 } : item)));
    } else {
      setCart([...cart, product]);
    }
  };

  const deleteProduct = (id) => {
    const foundId = cart.find((item) => item.id === id);

    const newCart = cart.filter((item) => {
      return item !== foundId;
    });

    setCart(newCart);
  };

  return <dataContext.Provider value={{ cart, setCart, addCart, deleteProduct }}>{children}</dataContext.Provider>;
};
export default DataProvider;
