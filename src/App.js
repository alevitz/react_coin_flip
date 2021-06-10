import React, { useState } from "react";
import './App.css';
import Coin from "./Coin";
import Results from "./Results";
import heads from "./dime_front.png"
import tails from "./dime_back.jpeg"


function App(props) {
  const [coinFlip, setCoinFlip] = useState(0);    
  const [headsCount, setHeadsCount] = useState(0);
  const [tailsCount, setTailsCount] = useState(0);
  const coin = props.coins[coinFlip];
  const flipCoin = () => {
    setCoinFlip(Math.round(Math.random()));
    if(coinFlip === 0){
      setHeadsCount(headsCount + 1);
    } else {
      setTailsCount(tailsCount + 1);
    }
  };

  return (
    <div>
    {headsCount + tailsCount === 0 ? null : 
    <div>
    <Coin coin={coin}/>
    <Results headsCount={headsCount} tailsCount={tailsCount}/>
    </div>
    }
      <button 
        onClick={flipCoin}
        text="Flip the coin"
      >Flip the Coin!!!</button>
    </div>
  );
}

App.defaultProps = {
  coins: [heads, tails]    
}
export default App;
