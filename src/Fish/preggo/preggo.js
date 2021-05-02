import { Application, Sprite, useApp, withPixiApp } from "@inlet/react-pixi";
import React, { useEffect, useState, useReducer, useRef } from "react";
import { useTick } from "@inlet/react-pixi";
import { GoldFish } from "../../model/Goldfish";
import {CONSTANTS} from '../../util/utilities'
/*
Written By:
Daniel Gannage (6368898)
Cameron Hutchings (6427892)
*/

/*
This component is a pixi.js sprite of an svg image of a puffer fish from icons8,
with a passed in x and y coordinate,
scale tranforms the size
*/
export const Preggo = (
  {
    preggo,
    createFish,
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
    let scaleX = preggo.size;
    let scaleY = preggo.size;
 
    


    

    // Check if baby fish needs to drop
    if (preggo.getCurrentTimer() > 10) {
      // reset timer
      preggo.resetTimer();
      preggo.startTimer();
      createFish(new GoldFish(preggo.x,preggo.y));
    }
    // if outside the right bounds, change direction left
    if (preggo.x > CONSTANTS.MAXX) {
      preggo.unitV[0] = preggo.unitV[0] * -1;

      iter.current = 0;
    }
    // if outside the bounds left, change direction right
    if (preggo.x < CONSTANTS.MINX) {
      preggo.unitV[0] = preggo.unitV[0] * -1;
      iter.current = 0;
    }
    // if outside the top bounds, change direction down
    if (preggo.y < CONSTANTS.MINY) {
      preggo.unitV[1] = preggo.unitV[1] * -1;
      iter.current = 0;
    }
    // if outside the bottom bounds, change direction up
    if (preggo.y > CONSTANTS.MAXY) {
      preggo.unitV[1] = preggo.unitV[1] * -1;
      iter.current = 0;
    }
    // update position
    preggo.setPosition(
        preggo.x + preggo.unitV[0] * preggo.speed,
        preggo.y + preggo.unitV[1] * preggo.speed
      );

  

    let image;

   
    // check if fish is moving right, change direction of fish
    if (preggo.unitV[0] > 0) {
      scaleX = scaleX * -1; // flip fish in x axis
    }
    // update current frame
    update({
      type: "update",
      data: {
        x: preggo.x,
        y: preggo.y,
        scale: { x: scaleX, y: scaleY },
        anchor: 0.5,
        image: image,
      },
    });
    }
  });

  return <Sprite image={"assets/fish/fishpreg.svg"} {...motion} />;
};
export default Preggo;
