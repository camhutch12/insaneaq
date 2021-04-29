import { Application, Sprite, useApp, withPixiApp } from "@inlet/react-pixi";
import React, { useEffect, useState, useReducer, useRef } from "react";
import { useTick } from "@inlet/react-pixi";
import { applyProps } from "react-pixi-fiber";
import * as PIXI from "pixi.js";
import { GoldFish } from "../model/Goldfish";
import { Carnivore } from "../model/carnivore";
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
export const Alien = ({ alien, goldfishList, deleteFish,deleteCarnivore }, props) => {
  
  const [pos, setPos] = useState({});
  const reducer = (_, { data }) => data;
  const [motion, update] = useReducer(reducer);
  const iter = useRef(0);
  useTick((delta) => {
    // increase the counter
    let i = (iter.current += 0.00001 * delta);
    let scaleX = alien.size;
    let scaleY = alien.size;

    // check if crumbs exist
    if (alien.setHasFishToChase(goldfishList)) {
      alien.setFishList(goldfishList);
      alien.getClosestFish();
      alien.direction[0] = alien.fish.x;
      alien.direction[1] = alien.fish.y - 100;
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

    // coin drop timer increases
    
  
    // if outside the right bounds, change direction left
    if (alien.x > window.innerWidth - 50) {
      alien.unitV[0] = alien.unitV[0] * -1;

      iter.current = 0;
    }
    // if outside the bounds left, change direction right
    if (alien.x < 30) {
      alien.unitV[0] = alien.unitV[0] * -1;
      iter.current = 0;
    }
    // if outside the top bounds, change direction down
    if (alien.y < 30) {
      alien.unitV[1] = alien.unitV[1] * -1;
      iter.current = 0;
    }
    // if outside the bottom bounds, change direction up
    if (alien.y > window.innerHeight - 130) {
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
    // delete fish
    for (let j = 0; j < goldfishList.length; j++) {
      if (
        alien.x <= goldfishList[j].x + 10 &&
        alien.x >= goldfishList[j].x - 10 &&
        alien.y <= goldfishList[j].y - 100 + 10 &&
        alien.y >= goldfishList[j].y - 100 - 10
      ) {
        
        if(goldfishList[j] instanceof GoldFish){
          deleteFish(goldfishList[j]);

        }
        if(goldfishList[j] instanceof Carnivore){
          deleteCarnivore(goldfishList[j])
        }
        alien.totalEatenFood++;
        alien.fish = null;
      }
    }
    // hunger timer
    // alien.setHungerTimer(alien.hungerTimer + 1);
    // if hungry for too long, change hunger level
    // if (alien.hungerTimer > 500) {
    //   alien.setHunger(alien.hunger + 1);
    //   // (0 is no hunger)
    //   // (1 searches for food)
    //   // (2 is yellow)
    //   // (3 is dead)
    // }
    let image = '../assets/alien/octo.svg'

   
    // if fish has been dead, delete it
    // if (alien.hunger > 3) {
    //   deleteFish(alien);
    // }
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
        image: image,
      },
    });
  });
  return <Sprite image={"../assets/alien/octo.svg" } {...motion} />;
};
export default Alien;
