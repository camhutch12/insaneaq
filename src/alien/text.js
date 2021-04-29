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
export const TextWarning = ({ text, deleteText }, props) => {
  
    const [pos, setPos] = useState({});
    const reducer = (_, { data }) => data;
    const [motion, update] = useReducer(reducer);
    const iter = useRef(0);
    useTick((delta) => {
      // increase the counter
      let i = (iter.current += 0.00001 * delta);
      let scaleX = text.size;
      let scaleY = text.size;
      
      text.increaseCounter(text.counter+1)
      if(text.counter>100){
        deleteText(text)
      }

      // update current frame
      update({
        type: "update",
        data: {
          anchor: [0.5,0.5],
          text: "DANGER: PREDATOR COMING",
          x: text.x,
          y: text.y,
        },
      });
    });

    return <Sprite 
    image="assets/alien/danger.png" 
    anchor={0.5}
    x={window.innerWidth/2}
    y={window.innerHeight-200}
    
    />;
  };
export default TextWarning
