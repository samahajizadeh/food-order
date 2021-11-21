import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from './CartItem';

const Cart = (props) => {
  const ctxItem = useContext(CartContext);
  const totalAmount = `$${ctxItem.totalAmount.toFixed(2)}`;
  const hasItem = ctxItem.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    ctxItem.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    ctxItem.addItem({...item, amount: 1});
  };

  debugger
  const cartItems = (
    <ul className={classes["cart-items"]}>

      {ctxItem.items.map((item) => (
        <CartItem
        key={item.id}
        name={item.name}
        amount={item.amount}
        price={item.price}
        onRemove={cartItemRemoveHandler.bind(null, item.id)}
        onAdd={cartItemAddHandler.bind(null, item)}
      />
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.hideCartHandler}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button
          className={classes["button--alt"]}
          onClick={props.hideCartHandler}
        >
          Close
        </button>
        {hasItem && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
