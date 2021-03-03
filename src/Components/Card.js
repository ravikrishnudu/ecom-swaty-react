import React from "react";
import logo from "./images/img01.jpg";


class Card extends React.Component {
  render() {
      console.log(this.props);
      const {name}=this.props
    return (
      <>
        <div>
          <img className="store-item-img" src={logo} alt="logo" />
          <div className="card">
            <h4>{name}</h4>
            <h4>
              <strong>$$$</strong>
            </h4>
          </div>
        </div>
      </>
    );
  }
}

export default Card