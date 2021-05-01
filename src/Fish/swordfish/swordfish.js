import { Application, Sprite, useApp, withPixiApp } from "@inlet/react-pixi";
import React, { useEffect, useState, useReducer, useRef } from "react";
import { useTick } from "@inlet/react-pixi";
import { applyProps } from "react-pixi-fiber";
import { deleteCrumb } from "../../actions/crumbActions";
import * as PIXI from "pixi.js";
import {isboundingBoxCoords} from '../../util/utilities'
import { deleteAlien } from "../../actions/alienAction";
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
export const SwordFish = (
  {
    swordFish,
    aliensList,
    deleteAlien,
  },
  props
) => {
  swordFish.aliensList = [];
  swordFish.alien = null;
  const [pos, setPos] = useState({});
  const reducer = (_, { data }) => data;
  const [motion, update] = useReducer(reducer);
  const iter = useRef(0);
  useTick((delta) => {
    
    // increase the counter
    let i = (iter.current += 0.00001 * delta);
    let scaleX = swordFish.size;
    let scaleY = swordFish.size;
    // check if crumbs exist
    if (swordFish.setHasAliensToChase(aliensList)) {
      swordFish.setAlienList(aliensList);
      swordFish.getClosestAlien();
      swordFish.direction[0] = swordFish.alien.x;
      swordFish.direction[1] = swordFish.alien.y-100;
      swordFish.difference[0] = swordFish.direction[0] - swordFish.x;
      swordFish.difference[1] = swordFish.direction[1] - swordFish.y;

      let distance = Math.sqrt(
        Math.pow(swordFish.difference[0], 2) +
          Math.pow(swordFish.difference[1], 2)
      );
      swordFish.unitV = [
        swordFish.difference[0] / distance,
        swordFish.difference[1] / distance,
      ];
      swordFish.setPosition(
        swordFish.x + swordFish.unitV[0] * swordFish.speed,
        swordFish.y + swordFish.unitV[1] * swordFish.speed
      );
    }

   
    if (swordFish.x > CONSTANTS.MAXX) {
      swordFish.unitV[0] = swordFish.unitV[0] * -1;

      iter.current = 0;
    }
    // if outside the bounds left, change direction right
    if (swordFish.x < CONSTANTS.MINX) {
      swordFish.unitV[0] = swordFish.unitV[0] * -1;
      iter.current = 0;
    }
    // if outside the top bounds, change direction down
    if (swordFish.y < CONSTANTS.MINY) {
      swordFish.unitV[1] = swordFish.unitV[1] * -1;
      iter.current = 0;
    }
    // if outside the bottom bounds, change direction up
    if (swordFish.y > CONSTANTS.MAXY) {
      swordFish.unitV[1] = swordFish.unitV[1] * -1;
      iter.current = 0;
    }
    // update position
    if (!swordFish.setHasAliensToChase(aliensList)) {
      swordFish.setPosition(
        swordFish.x + swordFish.unitV[0] * swordFish.speed,
        swordFish.y + swordFish.unitV[1] * swordFish.speed
      );
    }
    for(let i = 0; i <  aliensList.length; i++){
      let p1 = {x:aliensList[i].x,y:aliensList[i].y}
      let p2 = {x:swordFish.x,y:swordFish.y}
      if(isboundingBoxCoords(p1,p2,30)){
        aliensList[i].health -= 1;
        
      }
      if(aliensList[i].health <= 0){
        deleteAlien(aliensList[i]);
      }
    }

 
    
    let image;
   
    // check if fish is moving right, change direction of fish
    if (swordFish.unitV[0] < 0) {
      scaleX = scaleX * -1; // flip fish in x axis
    }
    // update current frame
    update({
      type: "update",
      data: {
        x: swordFish.x,
        y: swordFish.y,
        scale: { x: scaleX, y: scaleY },
        anchor: 0.5,
        image: image,
      },
    });
  });

  return <Sprite image={"assets/fish/swordfish.svg"} {...motion} />;
};
export default SwordFish;
