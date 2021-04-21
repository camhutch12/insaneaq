import './App.css';
import { Stage, Sprite, Graphics, useApp, Container,render } from '@inlet/react-pixi';
import GoldFish from './Fish/goldfish/goldfish';
import Game from './game/game';
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
  // [hasClicked,setHasClicked] = useState(false);
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
      //console.log(locationMouseClick)
     // return locationMouseClick;
  }

  const getlocation = ()=>{
    //console.log(locationMouseClick)
    return locationMouseClick
  }
  return (
    
 
     <Game hasClicked={hasClicked} posClicked={locationMouseClick} getClick={getlocation} background={background} SCREEN_SIZE={SCREEN_SIZE}/>
  );
}

export default App;

// import {Application} from 'pixi.js'

// // get the canvas DOM object
// const canvas = document.getElementById("canvas");
// // set the stage for the canvas
// const app = new PIXI.Application({
//     view: canvas,
//     width: window.innerWidth,
//     height: window.innerHeight,
// });
// // set background color
// app.renderer.backgroundColor = 0x00FFFF;

// let keys = {};
// var keysDiv = document.getElementById("keys");


// // main loop
// app.ticker.add(mainLoop);


// /*
// This is the main loop
// */
// function mainLoop(){
    
//     //img.rotation +=0.01;
//     //keysDiv.innerHTML = JSON.stringify(keys);

//     // WSAD keys
//     if(keys[68]){
//         goldfish.x+=5;
//     }
//     if(keys[65]){
//         goldfish.x-=5;
//     }
//     if(keys[87]){
//         goldfish.y-=5;
//     }
//     if(keys[83]){
//         goldfish.y+=5;
//     }

//     // space bar
//     if(keys[32]){
//         goldfish.y+=50;
//     }

// }


// //keyboard event handler
// window.addEventListener("keydown", keyDown);
// window.addEventListener("keyup", keyUp);

// function keyDown(e){
//     keys[e.keyCode] = true;
// }

// function keyUp(e){
//     keys[e.keyCode] = false;
// }