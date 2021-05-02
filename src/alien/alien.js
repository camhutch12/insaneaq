import { Application, Sprite, useApp, withPixiApp } from "@inlet/react-pixi";
import React, { useEffect, useState, useReducer, useRef } from "react";
import { useTick } from "@inlet/react-pixi";
import { applyProps } from "react-pixi-fiber";
import * as PIXI from "pixi.js";
import { GoldFish } from "../model/Goldfish";
import { Carnivore } from "../model/carnivore";
import {CONSTANTS} from '../util/utilities'
/*
Written By:
Daniel Gannage (6368898)
Cameron Hutchings (6427892)
*/

/*
This component is a pixi.js sprite of an svg image of a alien from icons8,
with a passed in x and y coordinate,
scale tranforms the size
*/
export const Alien = ({ alien, goldfishList, deleteFish,deleteCarnivore, players }, props) => {
  
  const [pos, setPos] = useState({});
  const reducer = (_, { data }) => data;
  const [motion, update] = useReducer(reducer);
  const iter = useRef(0);

  // set the list to empty 
  alien.goldfishList = []
  
  alien.goldfish = null; // set the goldfish to null


  useTick((delta) => {

    // check if game has been paused
    if(!players.pause){
      // play game


    // increase the counter
    let i = (iter.current += 0.00001 * delta);
    let scaleX = alien.size;
    let scaleY = alien.size;

    // check if fish exist
    if (alien.setHasFishToChase(goldfishList)) {
      // set the list of fish
      alien.setFishList(goldfishList);
      // find closet fish to attack
      alien.getClosestFish();
      // move towards that fish
      alien.direction[0] = alien.fish.x;
      alien.direction[1] = alien.fish.y;
      alien.difference[0] = alien.direction[0] - alien.x;
      alien.difference[1] = alien.direction[1] - alien.y;

      let distance = Math.sqrt(
        Math.pow(alien.difference[0], 2) + Math.pow(alien.difference[1], 2)
      );
      alien.unitV = [
        alien.difference[0] / distance,
        alien.difference[1] / distance,
      ];
      alien.setPosition(
        alien.x + alien.unitV[0] * alien.speed,
        alien.y + alien.unitV[1] * alien.speed
      );
    }

   
    
  
    // if outside the right bounds, change direction left
    if (alien.x > CONSTANTS.MAXX) {
      alien.unitV[0] = alien.unitV[0] * -1;

      iter.current = 0;
    }
    // if outside the bounds left, change direction right
    if (alien.x < CONSTANTS.MINX) {
      alien.unitV[0] = alien.unitV[0] * -1;
      iter.current = 0;
    }
    // if outside the top bounds, change direction down
    if (alien.y < CONSTANTS.MINY) {
      alien.unitV[1] = alien.unitV[1] * -1;
      iter.current = 0;
    }
    // if outside the bottom bounds, change direction up
    if (alien.y > CONSTANTS.MAXY) {
      alien.unitV[1] = alien.unitV[1] * -1;
      iter.current = 0;
    }
    // update position
    if (!alien.setHasFishToChase(goldfishList)) {
      alien.setPosition(
        alien.x + alien.unitV[0] * alien.speed,
        alien.y + alien.unitV[1] * alien.speed
      );
    }
    // delete fish if a collision has occured
    for (let j = 0; j < goldfishList.length; j++) {
      if (
        alien.x <= goldfishList[j].x + 10 &&
        alien.x >= goldfishList[j].x - 10 &&
        alien.y <= goldfishList[j].y  + 10 &&
        alien.y >= goldfishList[j].y  - 10
      ) {
        // check the type of fish
        if(goldfishList[j] instanceof GoldFish){
          deleteFish(goldfishList[j]);

        }
        // check the type of fish
        if(goldfishList[j] instanceof Carnivore){
          deleteCarnivore(goldfishList[j])
        }
        alien.totalEatenFood++;
        alien.fish = null;
      }
    }
   
   

 
    // check if fish is moving right, change direction of fish
    if (alien.unitV[0] > 0) {
      scaleX = scaleX * -1; // flip fish in x axis
    }
    // update current frame
    update({
      type: "update",
      data: {
        x: alien.x,
        y: alien.y,
        scale: { x: scaleX, y: scaleY },
        anchor: new PIXI.Point(0.5,0.5),
        image: alien.img,
      },
    });

  }
  });
  return <Sprite image={alien.img } {...motion} />;
};
export default Alien;

