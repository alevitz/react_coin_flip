import React from "react";
import "./Coin.css";

function Coin(props) {

  return (
    <div >
      <img className="coin" src={props.coin}></img>
    </div>
  );

}

export default Coin;
