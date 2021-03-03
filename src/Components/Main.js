import React from "react";
// import React from 'react';
import "./Main.css";
import logo from "./images/img01.jpg";
import Card from "./Card.js";

class Main extends React.Component {
  render() {
    return (
      <div>
        <hr />
        <div className="banner">
          <p>His Products</p>
          <p>Her Products</p>
          <p>Kids Products</p>
          <p>Top Merchantss</p>
        </div>
        <hr />
        <div className="containerr" style = {{display:"flex"}} >  
          <div>
            <h4 className="title">Trending Items</h4>
            <div className="store-cont">
              <Card name="clothes" price={99} />
              <Card name=" Clothes" price={22} />
              <Card name=" Clothes" price={22} />
            </div>
            <h4 className="title">Trending Items</h4>

            <div className="store-cont">
              <Card name=" Clothes" price={22} />
              <Card name=" Clothes" price={22} />
              <Card name=" Clothes" price={11} />
              </div>
              <h4 className="title">Trending Items</h4>

            <div className="store-cont">
              <Card name=" Clothes" price={22} />
              <Card name=" Clothes" price={22} />
              <Card name=" Clothes" price={22} />
            </div>
          </div>

          <div className="round-img">
            <img className="store-item-img-round" src={logo} alt="logo" />
            <img className="store-item-img-round" src={logo} alt="logo" />
            <img className="store-item-img-round" src={logo} alt="logo" />
            <img className="store-item-img-round" src={logo} alt="logo" />
            <img className="store-item-img-round" src={logo} alt="logo" />

          </div>
        </div>
      </div>
    );
  }
}

export default Main;
