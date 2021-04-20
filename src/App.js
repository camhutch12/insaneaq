import './App.css';
import { Stage, Sprite, Graphics, useApp, Container,render } from '@inlet/react-pixi';
import Sand from './background/sand/sand'

function App() {
  return (
    // <div>Hello</div>
    <Stage width={window.innerWidth}
     height={window.innerHeight}
      options={{backgroundColor: 0x00ffff}}
      
      >
     <Sprite image='./assets/fish/goldfish.svg' x={100} y={100} scale={[0.5,0.5]} />
     <Sand/>
    </Stage>
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




// // create bubbles
// let bubbles2 = [];
// for(let i = 0; i<30; i++){
//     // get image
//     const bubble2 = PIXI.Texture.from('assets/background/bub3.svg');
//     // make image a sprite
//     const bub2 = new PIXI.Sprite(bubble2);
//     // move image
//     let xIndex = Math.floor(Math.random() * app.renderer.width);
//     let yIndex = Math.floor(Math.random() * (app.renderer.height- app.renderer.height/4));
//     bub2.x = xIndex;
//     bub2.y= yIndex;
//     bub2.height = Math.floor(Math.random() * 100);
//     bub2.width = bub2.height;
//     // draw image
//     app.stage.addChild(bub2);

//     // add kelp to array
//     bubbles2.push(bub2)
// }

// // create kelp
// let kelps = [];
// for(let i = 0; i<15; i++){
    
//     // get image
//     const kelp = PIXI.Texture.from('assets/background/kelp.svg');
//     // make image a sprite
//     const imgKelp = new PIXI.Sprite(kelp);
//     // move image
//     let xIndex = Math.floor(Math.random() * (app.renderer.width));
//     let yIndex = app.renderer.height/1.3 + Math.floor(Math.random() * (app.renderer.height/6));
//     imgKelp.x = xIndex;
//     imgKelp.y= yIndex;
//     // draw image
//     app.stage.addChild(imgKelp);

//     // add kelp to array
//     kelps.push(imgKelp)
// }

// // create kelp
// let kelps2 = [];
// for(let i = 0; i<15; i++){
//     // get image
//     const kelp2 = PIXI.Texture.from('assets/background/kelp2.svg');
//     // make image a sprite
//     const imgKelp2 = new PIXI.Sprite(kelp2);
//      // move image
//      let xIndex = Math.floor(Math.random() * (app.renderer.width));
//      let yIndex = app.renderer.height/1.3 + Math.floor(Math.random() * (app.renderer.height/6));
//      imgKelp2.x = xIndex;
//      imgKelp2.y= yIndex;
//     // draw image
//     app.stage.addChild(imgKelp2);

//     // add kelp to array
//     kelps2.push(imgKelp2)
// }

// // get coral image
// const coral = PIXI.Texture.from('assets/background/coral1.svg');
// // make image a sprite
// const imgCoral = new PIXI.Sprite(coral);
// // move image
// let xIndex = app.renderer.width-app.renderer.width/1;
// let yIndex = app.renderer.height/1.3;
// imgCoral.x = xIndex;
// imgCoral.y= yIndex;
// // draw image
// app.stage.addChild(imgCoral);

// // get coral image
// const coral2 = PIXI.Texture.from('assets/background/coral2.svg');
// // make image a sprite
// const imgCoral2 = new PIXI.Sprite(coral2);
// // move image
// let xIndex1 = app.renderer.width-app.renderer.width/9;
// let yIndex1 = app.renderer.height/1.3;
// imgCoral2.x = xIndex1;
// imgCoral2.y= yIndex1;
// // draw image
// app.stage.addChild(imgCoral2);

// // get coral image
// const coral3 = PIXI.Texture.from('assets/background/coral3.svg');
// // make image a sprite
// const imgCoral3 = new PIXI.Sprite(coral3);
// // move image
// let xIndex2 = app.renderer.width-app.renderer.width/1.2;
// let yIndex2 = app.renderer.height/1.1;
// imgCoral3.x = xIndex2;
// imgCoral3.y= yIndex2;
// // draw image
// app.stage.addChild(imgCoral3)

// // create fish
// // get image
// const goldfishImg = PIXI.Texture.from('assets/fish/goldfish.svg');
// // make image a sprite
// const goldfish = new PIXI.Sprite(goldfishImg);
// goldfish.anchor.set(0.5);

// // move image
// goldfish.x = app.renderer.width/3;
// goldfish.y= app.renderer.height/4;
// goldfish.height = 100;
// goldfish.width = 100;
// // draw image
// //gl = new GoldFish(10,10,app);
// app.stage.addChild(goldfish);

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