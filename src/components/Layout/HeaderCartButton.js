import { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const {items} = cartCtx;
  const [btnIsHighLight,setBtnIsHighLight] = useState(false)
  // const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

 
  useEffect(()=>{
    if(items.length == 0){
      return
    }
    setBtnIsHighLight(true);

    const timer = setTimeout(()=>{
      setBtnIsHighLight(false)
    },300)
    return ()=>{
      clearTimeout(timer)
    }
  },[items])

  const btnClass = `${classes.button} ${btnIsHighLight?classes.bump : ''}`;
  return (
    <button className={btnClass} onClick={props.showCartHandler}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
