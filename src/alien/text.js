import { Application, Sprite, Text, TextStyle, useApp, withPixiApp } from "@inlet/react-pixi";
import React, { useEffect, useState, useReducer, useRef } from "react";
import { useTick } from "@inlet/react-pixi";
import { applyProps } from "react-pixi-fiber";
import * as PIXI from "pixi.js";

/*
Written By:
Daniel Gannage (6368898)
Cameron Hutchings (6427892)
*/

/*
This component is a pixi.js sprite of an svg image of a text from icons8,
with a passed in x and y coordinate,
scale tranforms the size
*/
export const TextWarning = ({ text, deleteText, players }) => {
  

    useTick(() => {
       // check if game has been paused
    if(!players.pause){
      // play game
    }
      
    });

    return <Sprite 
    image="assets/alien/danger.png"  
    anchor={0.5}
    x={window.innerWidth/2}
    y={window.innerHeight-400}
    />;
  };
export default TextWarning
