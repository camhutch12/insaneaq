import { Application, Sprite, useApp, withPixiApp } from "@inlet/react-pixi";
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
This component is a pixi.js sprite of an svg image of a portal from icons8,
with a passed in x and y coordinate,
scale tranforms the size
*/
export const Portal = ({ portal, deletePortal}, props) => {
  
  const [pos, setPos] = useState({});
  const reducer = (_, { data }) => data;
  const [motion, update] = useReducer(reducer);
  const iter = useRef(0);
  useTick((delta) => {
    // increase the counter
    let i = (iter.current += 0.00001 * delta);
    let scaleX = portal.size;
    let scaleY = portal.size;
  
    let image = '../assets/alien/portal.png'

    portal.increaseCounter(portal.counter+1)
    if(portal.counter>100){
      deletePortal(portal)
    }
    
    // update current frame
    update({
      type: "update",
      data: {
        x: portal.x,
        y: portal.y,
        scale: { x: scaleX, y: scaleY },
        anchor: new PIXI.Point(0.5,0.5),
        image: image,
      },
    });
  });
  return <Sprite image={"../assets/alien/portal.png" } {...motion} />;
};
export default Portal;
