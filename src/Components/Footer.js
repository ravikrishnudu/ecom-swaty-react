import React from "react";
import "./Footer.css";
import logo from "./images/img/swaty1.jpg";

class Footer extends React.Component {
  render() {
    return (
      <div>
        <hr />
        <div className="foot-cont">
          <img src={logo} alt="logo" />
          <button className="button-foot">Subscribe for Offers</button>
          <div>
            What is Swaty <br />
            Affilites
          </div>
          <div>
            Blog <br /> Terms
          </div>
          <div>
            Help Center <br />
            Have a Question{" "}
          </div>
          <div>
            Privacy & Trust <br />
            Support
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
