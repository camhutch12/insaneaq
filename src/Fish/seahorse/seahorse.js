import { Application, Sprite, useApp, withPixiApp } from "@inlet/react-pixi";
import React, { useEffect, useState, useReducer, useRef } from "react";
import { useTick } from "@inlet/react-pixi";
import {CONSTANTS} from '../../util/utilities'
/*
Written By:
Daniel Gannage (6368898)
Cameron Hutchings (6427892)
*/

/*
This component is a pixi.js sprite of an svg image of a fish from icons8,
with a passed in x and y coordinate,
scale tranforms the size
*/
export const Seahorse = (
  {
    seahorse,
    createCrumb,
    player
  },
  props
) => {
 
  const [pos, setPos] = useState({});
  const reducer = (_, { data }) => data;
  const [motion, update] = useReducer(reducer);
  const iter = useRef(0);
  useTick((delta) => {

    // check if game has been paused
    if(!player.pause){
      // play game

    // increase the counter
    let i = (iter.current += 0.00001 * delta);
    let scaleX = seahorse.size;
    let scaleY = seahorse.size;
    // check if crumbs exist
    

    if (seahorse.getCurrentTimer() >= 5) {
      // reset timer
     
      seahorse.resetTimer();
      createCrumb({x:seahorse.x,y:(seahorse.y+100),isSeahorse:true})
      seahorse.startTimer();
  
     
      
     
    }
    // if outside the right bounds, change direction left
    if (seahorse.x > CONSTANTS.MAXX) {
      seahorse.unitV[0] = seahorse.unitV[0] * -1;

      iter.current = 0;
    }
    // if outside the bounds left, change direction right
    if (seahorse.x < CONSTANTS.MINX) {
      seahorse.unitV[0] = seahorse.unitV[0] * -1;
      iter.current = 0;
    }
    // if outside the top bounds, change direction down
    if (seahorse.y < CONSTANTS.MINY) {
      seahorse.unitV[1] = seahorse.unitV[1] * -1;
      iter.current = 0;
    }
    // if outside the bottom bounds, change direction up
    if (seahorse.y > CONSTANTS.MAXY) {
      seahorse.unitV[1] = seahorse.unitV[1] * -1;
      iter.current = 0;
    }
    // update position
    seahorse.setPosition(
        seahorse.x + seahorse.unitV[0] * seahorse.speed,
        seahorse.y + seahorse.unitV[1] * seahorse.speed
      );
 

  
    let image;

    
    // check if fish is moving right, change direction of fish
    if (seahorse.unitV[0] < 0) {
      scaleX = scaleX * -1; // flip fish in x axis
    }
    // update current frame
    update({
      type: "update",
      data: {
        x: seahorse.x,
        y: seahorse.y,
        scale: { x: scaleX, y: scaleY },
        anchor: 0.5,
        image: image,
      },
    });
  }
  });

  return <Sprite image={"assets/fish/seahorse.svg"} {...motion} />;
};
export default Seahorse;
