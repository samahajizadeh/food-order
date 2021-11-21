import React from "react";
import bgHeader from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton showCartHandler = {props.showCartHandler}/>
      </header>
      <div className={classes["main-image"]}>
        <img src={bgHeader} alt="this is a order food application" />
      </div>
    </React.Fragment>
  );
};
export default Header;
