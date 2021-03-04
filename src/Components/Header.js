import React from "react";
// import React from 'react';
import "./Header.css";
import logo from "./images/img/swaty1.jpg";
import cart from "./images/shopping-cart-solid.svg"
import user from "./images/user-regular.svg"

class Header extends React.Component {
  render() {
    return (
      <div className="container">
        <img src={logo} alt="logo" />
    
        <div >
          <input className = "sub-cont1" placeholder="Products" />
          <input className = "sub-cont1" placeholder="Location" />
        </div>
        <div className="sub-cont2">
          <div className = "sub-cont1" >Updates</div>
          <div className = "sub-cont1">Favorites</div>
          <img className = "sub-cont3" src={cart} alt="cart" />
          <img className = "sub-cont3" src={user} alt="user" />
        </div>
      </div>
    );
  }
}

export default Header;
