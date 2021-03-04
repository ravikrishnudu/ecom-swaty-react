import React from "react";
// import React from 'react';
import "./Main.css";
import logo from "./images/img01.jpg";
import logo1 from "./images/img02.jpg";
import logo2 from "./images/img03.jpg";
import logo3 from "./images/img09.jpg";
import logo4 from "./images/img12.jpg";
import logo5 from "./images/img14.jpg";
import logo6 from "./images/img15.jpg";
import logo7 from "./images/img16.jpg";
import logo8 from "./images/img18.jpg";
import logo9 from "./images/img/img 1.jpg";
import logo10 from "./images/img/img 5.jpg";
import logo11 from "./images/img/img08.jpg";
import logo12 from "./images/img/img 4.jpg";




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
              <div>
              <img className="store-item-img" src={logo1} alt="logo" />
              <div className="card">
                <h4>clothes</h4>
                <h4>
                  <strong>$$$</strong>
                </h4>
              </div>
            </div>
            <div>
              <img className="store-item-img" src={logo2} alt="logo" />
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
              <img className="store-item-img" src={logo3} alt="logo" />
              <div className="card">
                <h4>clothes</h4>
                <h4>
                  <strong>$</strong>99
                </h4>
              </div>
            </div>
            <div>
              <img className="store-item-img" src={logo4} alt="logo" />
              <div className="card">
                <h4>clothes</h4>
                <h4>
                  <strong>$</strong>99
                </h4>
              </div>
            </div>
            <div>
              <img className="store-item-img" src={logo5} alt="logo" />
              <div className="card">
                <h4>clothes</h4>
                <h4>
                  <strong>$</strong>99
                </h4>
              </div>
            </div>


              {/* <Card name=" Clothes" price={22} /> */}
              {/* <Card name=" Clothes" price={22} /> */}
              {/* <Card name=" Clothes" price={11} /> */}
              </div>
              <h4 className="title">Trending Items</h4>

            <div className="store-cont">
            <div>
              <img className="store-item-img" src={logo6} alt="logo" />
              <div className="card">
                <h4>clothes</h4>
                <h4>
                  <strong>$</strong>99
                </h4>
              </div>
            </div>
            <div>
              <img className="store-item-img" src={logo7} alt="logo" />
              <div className="card">
                <h4>clothes</h4>
                <h4>
                  <strong>$</strong>99
                </h4>
              </div>
            </div>
            <div>
              <img className="store-item-img" src={logo8} alt="logo" />
              <div className="card">
                <h4>clothes</h4>
                <h4>
                  <strong>$</strong>99
                </h4>
              </div>
            </div>
              {/* <Card name=" Clothes" price={22} /> */}
              {/* <Card name=" Clothes" price={22} /> */}
              {/* <Card name=" Clothes" price={22} /> */}
            </div>
          </div>

          <div className="round-img">
          <div>
              <img className="store-item-img-round" src={logo9} alt="logo" />
              <div className="card">
                <h4>people's</h4>
              </div>
            </div>
            <div>
              <img className="store-item-img-round" src={logo10} alt="logo" />
              <div className="card">
                <h4>people's</h4>
              </div>
            </div>
            <div>
              <img className="store-item-img-round" src={logo11} alt="logo" />
              <div className="card">
                <h4>people's</h4>
              </div>
            </div>
            <div>
              <img className="store-item-img-round" src={logo12} alt="logo" />
              <div className="card">
                <h4>people's</h4>
              </div>
            </div>
            {/* <img className="store-item-img-round" src={logo} alt="logo" /> */}
            {/* <img className="store-item-img-round" src={logo} alt="logo" /> */}
            {/* <img className="store-item-img-round" src={logo} alt="logo" /> */}
            {/* <img className="store-item-img-round" src={logo} alt="logo" /> */}
            {/* <img className="store-item-img-round" src={logo} alt="logo" /> */}

          </div>
        </div>
      </div>
    );
  }
}

export default Main;
