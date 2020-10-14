import React, { useState } from 'react';
import './Bingo.css';

interface IBingoBallProps {
  value: number
}

const BingoBall: React.FC<IBingoBallProps> = props => {
  return (
    <div className="ball">
      {props.value}
    </div>
  )
}

const numberRange = (range: number) => {
  return Array.from({length: range}, (_, i) => i + 1)
}

const Bingo: React.FC = () => {
  const [initialBalls, setInitialBalls] = useState<number[]>(numberRange(20));
  const [chosenBalls, setChosenBalls] = useState<number[]>([]);

  const pickRandomBall = (initialBalls: number[]) => {
    return initialBalls[Math.floor(Math.random() * initialBalls.length)];
  }

  const getNewBall = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const newBall = pickRandomBall(initialBalls);
    if (newBall) {
      if (initialBalls.length === 1) {
        event.currentTarget.innerHTML = "NO BALLS LEFT";
        event.currentTarget.disabled = true;
      }
      setInitialBalls(initialBalls.filter(ball => ball !== newBall));
      setChosenBalls([...chosenBalls, newBall]);
      console.log(`initial balls: ${initialBalls.length}\nchosen balls: ${chosenBalls.length}`)
    }
  }

  return (
    <div>
      <button className="btn" onClick={getNewBall}>
        Draw new ball
      </button>
      <div className="ballContainer">
         {chosenBalls.map(ball => (<BingoBall key={ball} value={ball}/>))}
      </div>
    
    </div>
    );
}

export default Bingo;