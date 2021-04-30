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
This component is a pixi.js sprite of an svg image of a fish from icons8,
with a passed in x and y coordinate,
scale tranforms the size
*/
export const GoldFish = (
  {
    goldfish,
    goldfishList,
    crumb,
    deleteCrumb,
    deleteFish,
    createCoin,
    timer,
    createAlien,
    createPortal,
    createText,
    levelParams,
  },
  props
) => {
  goldfishList.forEach((element) => {
    element.crumb = null;
    element.crumbList = [];
  });
  const [pos, setPos] = useState({});
  const reducer = (_, { data }) => data;
  const [motion, update] = useReducer(reducer);
  const iter = useRef(0);
  useTick((delta) => {
    if (levelParams.allowedAliens.canhaveAlien1) {
      if (timer.currentTime > 23 && timer.currentTime < 25) {
        createText();
      }
      if (timer.currentTime >= 10) {
        createAlien();
      }
    }
    // increase the counter
    let i = (iter.current += 0.00001 * delta);
    let scaleX = goldfish.size;
    let scaleY = goldfish.size;
    // check if crumbs exist
    if (goldfish.setHasCrumbsToChase(crumb)) {
      goldfish.setCrumbList(crumb);
      goldfish.getClosestCrumb();
      goldfish.direction[0] = goldfish.crumb.x;
      goldfish.direction[1] = goldfish.crumb.y - 100;
      goldfish.difference[0] = goldfish.direction[0] - goldfish.x;
      goldfish.difference[1] = goldfish.direction[1] - goldfish.y;

      let distance = Math.sqrt(
        Math.pow(goldfish.difference[0], 2) +
          Math.pow(goldfish.difference[1], 2)
      );
      goldfish.unitV = [
        goldfish.difference[0] / distance,
        goldfish.difference[1] / distance,
      ];
      goldfish.setPosition(
        goldfish.x + goldfish.unitV[0] * goldfish.speed,
        goldfish.y + goldfish.unitV[1] * goldfish.speed
      );
    }

    // coin drop timer increases
    goldfish.setCoinDrop(goldfish.coinDropTimer + 1);

    // Check if coin needs to drop
    if (goldfish.coinDropTimer > goldfish.dropRate) {
      // reset timer
      goldfish.setCoinDrop(0);
      // make coin either silver or gold based on fish size
      let type = 0;
      // small
      if (goldfish.size === 0.2) {
        type = 0; // silver
        // medium
      } else if (goldfish.size === 0.4) {
        const rand = Math.random() * 100;
        if (rand > 75) {
          type = 1; // gold
        } else {
          type = 0; // silver
        }

        // large
      } else if (goldfish.size === 0.6) {
        type = 1; // gold
      }
      // add coin to array of coins (redux)
      createCoin({ x: goldfish.x, y: goldfish.y, type: type });
    }
    // if outside the right bounds, change direction left
    if (goldfish.x > CONSTANTS.MAXX) {
      goldfish.unitV[0] = goldfish.unitV[0] * -1;

      iter.current = 0;
    }
    // if outside the bounds left, change direction right
    if (goldfish.x < CONSTANTS.MINX) {
      goldfish.unitV[0] = goldfish.unitV[0] * -1;
      iter.current = 0;
    }
    // if outside the top bounds, change direction down
    if (goldfish.y < CONSTANTS.MAXY) {
      goldfish.unitV[1] = goldfish.unitV[1] * -1;
      iter.current = 0;
    }
    // if outside the bottom bounds, change direction up
    if (goldfish.y > CONSTANTS.MINY) {
      goldfish.unitV[1] = goldfish.unitV[1] * -1;
      iter.current = 0;
    }
    // update position
    if (!goldfish.setHasCrumbsToChase(crumb)) {
      goldfish.setPosition(
        goldfish.x + goldfish.unitV[0] * goldfish.speed,
        goldfish.y + goldfish.unitV[1] * goldfish.speed
      );
    }
    // delete crumb if not full/dead and fish hits crumb
    if (goldfish.hunger == 1 || goldfish.hunger == 2) {
      for (let j = 0; j < crumb.length; j++) {
        if (
          goldfish.x <= crumb[j].x + 30 &&
          goldfish.x >= crumb[j].x - 30 &&
          goldfish.y <= crumb[j].y - 100 + 30 &&
          goldfish.y >= crumb[j].y - 100 - 30
        ) {
          goldfish.increaseSize(crumb[j]);
          deleteCrumb(crumb[j]);
          goldfish.crumb = null;
          goldfish.setHunger(goldfish.hunger - 1);
        }
      }
    }

    // hunger timer
    goldfish.setHungerTimer(goldfish.hungerTimer + 1);
    // if hungry for too long, change hunger level
    if (goldfish.hungerTimer > 500) {
      goldfish.setHunger(goldfish.hunger + 1);
      // (0 is no hunger)
      // (1 searches for food)
      // (2 is yellow)
      // (3 is dead)
    }
    let image;
    // if fish is stage 2 hunger, turn yellow
    if (goldfish.hunger == 2) {
      image = "assets/fish/fishhungry.svg";
    }
    // if fish is stage 1 or 0 hunger, turn red
    if (goldfish.hunger == 1 || goldfish.hunger == 0) {
      image = "assets/fish/fish.svg";
    }
    // if fish is dead, flip it
    if (goldfish.hunger == 3) {
      scaleY = scaleY * -1; // flip fish is Y axis
      image = "assets/fish/fishsick.svg";
    }
    // if fish has been dead, delete it
    if (goldfish.hunger > 3) {
      deleteFish(goldfish);
    }
    // check if fish is moving right, change direction of fish
    if (goldfish.unitV[0] > 0) {
      scaleX = scaleX * -1; // flip fish in x axis
    }
    // update current frame
    update({
      type: "update",
      data: {
        x: goldfish.x,
        y: goldfish.y,
        scale: { x: scaleX, y: scaleY },
        anchor: 0.5,
        image: image,
      },
    });
  });

  return <Sprite image={"assets/fish/fish.svg"} {...motion} />;
};
export default GoldFish;
