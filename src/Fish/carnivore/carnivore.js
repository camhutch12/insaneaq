import { Application, Sprite, useApp, withPixiApp } from "@inlet/react-pixi";
import React, { useEffect, useState, useReducer, useRef } from "react";
import { useTick } from "@inlet/react-pixi";
import { applyProps } from "react-pixi-fiber";
import { deleteCrumb } from "../../actions/crumbActions";
import {CONSTANTS} from '../../util/utilities'
import * as PIXI from "pixi.js";
/*
Written By:
Daniel Gannage (6368898)
Cameron Hutchings (6427892)
*/

/*
This component is a pixi.js sprite of an svg image of a carnivore from icons8,
with a passed in x and y coordinate,
scale tranforms the size
*/
export const Carnivore = (
  {
    carnivore,
    carnivoreList,
    goldfishList,
    deleteFish,
    deleteCarnivore,
    createCoin,
    player
  },
  props
) => {
  // resets the list of fish stored in the carnivore object
  carnivoreList.forEach((element) => {
    element.goldfish = null;
    element.goldfishList = [];
  });
  const [pos, setPos] = useState({});
  const reducer = (_, { data }) => data;
  const [motion, update] = useReducer(reducer);
  const iter = useRef(0);
  useTick((delta) => {
    
    // check if game has been paused
    if(!player.pause){
      // play game


    // increase the counter
    let scaleX = carnivore.size;
    let scaleY = carnivore.size;
    // check if baby goldfish exists
    if (carnivore.setHasGoldfishToChase(goldfishList)) {
      // set the carnivore list to have updated goldfish list 
      carnivore.setGoldfishList(goldfishList);
      // find the closest goldfish to this carnivore 
      carnivore.getClosestGoldfish();
      try{
        // gets the point x and y for the goldfish
      carnivore.direction[0] = carnivore.goldfish.x;
      carnivore.direction[1] = carnivore.goldfish.y;
      
        // create a vector with a of the difference between the goldfish and canivore
      carnivore.difference[0] = carnivore.direction[0] - carnivore.x;
      carnivore.difference[1] = carnivore.direction[1] - carnivore.y;
        // sqaure the difference 
      let distance = Math.sqrt(
        Math.pow(carnivore.difference[0], 2) +
          Math.pow(carnivore.difference[1], 2)
      );
      // get the unit vector 
      carnivore.unitV = [
        carnivore.difference[0] / distance,
        carnivore.difference[1] / distance,
      ];
      // set the new postion for the carnivore chasing the goldfish by multiply speed * direction and add it to the old position
      carnivore.setPosition(
        carnivore.x + carnivore.unitV[0] * carnivore.speed,
        carnivore.y + carnivore.unitV[1] * carnivore.speed
      );
      }
      catch(e){}
    }

    // coin drop timer increases
    carnivore.setCoinDrop(carnivore.coinDropTimer + 1);

    // Check if coin needs to drop
    if (carnivore.coinDropTimer > carnivore.dropRate) {
      // reset timer
      carnivore.setCoinDrop(0);
      // make coin drop a diamond based on carnivore
      let type = 2;
      // add coin to array of coins (redux)
      createCoin({ x: carnivore.x, y: carnivore.y, type: type });
    }
    // if outside the right bounds, change direction left
    if (carnivore.x > CONSTANTS.MAXX) {
      carnivore.unitV[0] = carnivore.unitV[0] * -1;

      iter.current = 0;
    }
    // if outside the bounds left, change direction right
    if (carnivore.x < CONSTANTS.MINX) {
      carnivore.unitV[0] = carnivore.unitV[0] * -1;
      iter.current = 0;
    }
    // if outside the top bounds, change direction down
    if (carnivore.y < CONSTANTS.MINY) {
      carnivore.unitV[1] = carnivore.unitV[1] * -1;
      iter.current = 0;
    }
    // if outside the bottom bounds, change direction up
    if (carnivore.y > CONSTANTS.MAXY) {
      carnivore.unitV[1] = carnivore.unitV[1] * -1;
      iter.current = 0;
    }
    // update position if the carnivore is not chasing a fish
    if (!carnivore.setHasGoldfishToChase(goldfishList)) {
      carnivore.setPosition(
        carnivore.x + carnivore.unitV[0] * carnivore.speed,
        carnivore.y + carnivore.unitV[1] * carnivore.speed
      );
    }
    // delete goldfishList if not full/dead and carnivore hits goldfishList
    if (carnivore.hunger == 1 || carnivore.hunger == 2) {
      // check if a collsion has occured between a babyfish and this fish
      for (let j = 0; j < goldfishList.length; j++) {
        if (
          carnivore.x <= goldfishList[j].x + 30 &&
          carnivore.x >= goldfishList[j].x - 30 &&
          carnivore.y <= goldfishList[j].y + 30 &&
          carnivore.y >= goldfishList[j].y - 30 &&
          goldfishList[j].size === 0.2
        ) {
          if (carnivore.hunger == 1 || carnivore.hunger == 2) {
            deleteFish(goldfishList[j]);
            carnivore.totalEatenFood++;
            carnivore.goldfishList = null;
            carnivore.setHunger(carnivore.hunger - 1); // reduce huger level
          }
        }
      }
    }

    // hunger timer
    carnivore.setHungerTimer(carnivore.hungerTimer + 1);
    // if hungry for too long, change hunger level
    if (carnivore.hungerTimer > 500) {
      carnivore.setHunger(carnivore.hunger + 1);
      // (0 is no hunger)
      // (1 searches for food)
      // (2 is yellow)
      // (3 is dead)
    }
    let image;
    // if carnivore is stage 2 hunger, turn yellow
    if (carnivore.hunger == 2) {
      image = "assets/fish/bigfish/bigfishsick.svg";
    }
    // if carnivore is stage 1 or 0 hunger, turn red
    if (carnivore.hunger == 1 || carnivore.hunger == 0) {
      image = "assets/fish/bigfish/bigfish.svg";
    }

    // if carnivore is dead, flip it
    if (carnivore.hunger == 3) {
      scaleY = scaleY * -1; // flip carnivore is Y axis
      image = "assets/fish/bigfish/bigfishdead.svg";
    }
    // if carnivore has been dead, delete it
    if (carnivore.hunger > 3) {
      deleteCarnivore(carnivore);
    }
    // check if carnivore is moving right, change direction of carnivore
    if (carnivore.unitV[0] > 0) {
      scaleX = scaleX * -1; // flip carnivore in x axis
    }
    // update current frame
    update({
      type: "update",
      data: {
        x: carnivore.x,
        y: carnivore.y,
        scale: { x: -scaleX, y: scaleY },
        anchor: 0.5,
        image: image,
      },
    });
    }
  });

  return <Sprite image={"assets/fish/bigfish/bigfish.svg"} {...motion} />;
};
export default Carnivore;
