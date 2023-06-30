import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

const TotalItems = () => {
  const { cart } = useContext(dataContext);

  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  return <p className="itemsTotal">{totalQuantity}</p>;
};

export default TotalItems;
