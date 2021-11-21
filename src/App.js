import React, { Fragment, useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/cartProvider";

const App = () => {
  const [cartIsShow, setCartIsShow] = useState(false);

  const showCartHandler = () => {
    setCartIsShow(true);
  };

  const hideCartHandler = () => {
    setCartIsShow(false);
  };
  return (
    <CartProvider>
      {cartIsShow && <Cart hideCartHandler={hideCartHandler}/>}
      <Header
        showCartHandler={showCartHandler}
      />
      <Meals />
    </CartProvider>
  );
};
export default App;
