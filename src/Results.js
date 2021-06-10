import React from "react";


function Results(props) {
const heads = props.headsCount;
const tails = props.tailsCount;


  return (
    <div>
    You flipped the coin {heads + tails} times, {heads} heads, {tails} tails.
    </div>
  );

}

export default Results;