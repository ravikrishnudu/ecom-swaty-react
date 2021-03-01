import React from "react";
// import React from 'react';
import "./Main.css";
import logo from "./images/img01.jpg";

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

        <div>
          <h4 className="title">Trending Items</h4>
          <div className="store-cont">
            <div>
              <img className="store-item-img" src={logo} alt="logo" />
              <div className="card">
                <h4>clothes</h4>
                <h4>
                  <strong>$</strong>99
                </h4>
              </div>
            </div>
            <div>
              <img className="store-item-img" src={logo} alt="logo" />
              <div className="card">
                <h4>clothes</h4>
                <h4>
                  <strong>$</strong>99
                </h4>
              </div>
            </div>
            <div>
              <img className="store-item-img" src={logo} alt="logo" />
              <div className="card">
                <h4>clothes</h4>
                <h4>
                  <strong>$</strong>99
                </h4>
              </div>
            </div>
          </div>
          <h4 className="title"> Trending Items </h4>
          <div className="store-cont">
            <div>
              <img className="store-item-img" src={logo} alt="logo" />
              <div className="card">
                <h4>clothes</h4>
                <h4>
                  <strong>$</strong>99
                </h4>
              </div>
            </div>
            <div>
              <img className="store-item-img" src={logo} alt="logo" />
              <div className="card">
                <h4>clothes</h4>
                <h4>
                  <strong>$</strong>99
                </h4>
              </div>
            </div>
            <div>
              <img className="store-item-img" src={logo} alt="logo" />
              <div className="card">
                <h4>clothes</h4>
                <h4>
                  <strong>$</strong>99
                </h4>
              </div>
            </div>
          </div>
          <h4 className="title">Trending Items</h4>
          <div className="store-cont">
            <div>
              <img className="store-item-img" src={logo} alt="logo" />
              <div className="card">
                <h4>clothes</h4>
                <h4>
                  <strong>$</strong>99
                </h4>
              </div>
            </div>
            <div>
              <img className="store-item-img" src={logo} alt="logo" />
              <div className="card">
                <h4>clothes</h4>
                <h4>
                  <strong>$</strong>99
                </h4>
              </div>
            </div>
            <div>
              <img className="store-item-img" src={logo} alt="logo" />
              <div className="card">
                <h4>clothes</h4>
                <h4>
                  <strong>$</strong>99
                </h4>
              </div>
            </div>
          </div>
        </div>
          <div className="round-img">
          <img className="store-item-img" src={logo} alt="logo" />
          <img className="store-item-img" src={logo} alt="logo" />
          <img className="store-item-img" src={logo} alt="logo" />
          <img className="store-item-img" src={logo} alt="logo" />



          </div>

      </div>
    );
  }
}

export default Main;
