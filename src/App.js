import './App.css';
import { Stage, Sprite, Graphics, useApp, Container,render } from '@inlet/react-pixi';
import GoldFish from './Fish/goldfish/goldfish';
import Game from './game/game';
import UI from './UI/ui';
import { useState } from 'react';

function App() {



  const setupBubbles = () => {
    const p = []
    for(let i =0; i<10; i++){
        p.push(
            {x:Math.floor(Math.random() * document.documentElement.clientWidth),
                y:Math.floor(Math.random() * document.documentElement.clientHeight - document.documentElement.clientHeight/4)},
        );
    }
    return p


}

const setupKelp = () => {
  const p = []
    for(let i =0; i<10; i++){
        p.push(
            {x:Math.floor(Math.random() * document.documentElement.clientWidth),
                y:document.documentElement.clientHeight/1.3 + Math.floor(Math.random() * (document.documentElement.clientHeight/6))},
        );
    }
    return p 
}


const setupKelp2 = () => {
  const p = []
    for(let i =0; i<10; i++){
        p.push(
            {x:Math.floor(Math.random() * document.documentElement.clientWidth),
                y:document.documentElement.clientHeight/1.3 + Math.floor(Math.random() * (document.documentElement.clientHeight/6))},
        );
    }
    return p 
}


const SCREEN_SIZE = {
                     x:document.documentElement.clientWidth,
                     y:document.documentElement.clientHeight,
                    };
const background = {
    bubble:setupBubbles(),
    kelp:setupKelp(),
    kelp2:setupKelp2(),
}



  const locationMouseClick = {x:0, y:0};
  let hasClicked = false;

  const positons = [
    
    {
      pos:
      {x:Math.floor((Math.random() * window.innerWidth)+1)
        ,y:Math.floor((Math.random() * window.innerWidth)+1)
      },
      food:{x:locationMouseClick.x,y:locationMouseClick.y}
  },
    
  ]
  
  /*
  Register the mouse click x and y coordinated with a mouse listener
  */
  const getClick = (event) => {
    locationMouseClick.x = event.clientX;
    locationMouseClick.y = event.clientY;
    hasClicked = true;
  }

  const getlocation = ()=>{
    return locationMouseClick
  }

  const [start, setStart] = useState(false);
  
  const appStart = () => {
    setStart(true)
  }

  return (
    
    <div>
     {start ?   <Game hasClicked={hasClicked} posClicked={locationMouseClick} getClick={getlocation} background={background} SCREEN_SIZE={SCREEN_SIZE}/> : <UI onClick = {appStart}/>}
     </div>
 
    
  );
}

export default App;
