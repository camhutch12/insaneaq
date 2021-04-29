import { Sprite } from "@inlet/react-pixi";
import React, { useRef, useState, useReducer } from "react";
import { useTick } from "@inlet/react-pixi";
/*
Written By:
Daniel Gannage (6368898)
Cameron Hutchings (6427892)
*/

/*
This component is a pixi.js sprite of an svg image of a clam from icons8,
with a passed in x and y coordinate,
scale tranforms the size
*/
const Clam = ({ clam, coin, ...props }) => {
  clam.coin = null;
  clam.coinList = [];
  const [pos, setPos] = useState({});

  const reducer = (_, { data }) => data;
  const [motion, update] = useReducer(reducer);
  const iter = useRef(0);

  useTick((delta) => {
    // increase the counter
    let i = (iter.current += 0.00001 * delta);

    // if outside the right bounds, change direction left

    if (clam.x > window.innerWidth - 30) {
      clam.goRight = true;
      clam.goLeft = false;
      clam.unitVector[0] = clam.unitVector[0] * -1;
      iter.current = 0;
    }

    // if outside the bounds left, change direction right
    if (clam.x < 30) {
      clam.unitVector[0] = clam.unitVector[0] * -1;
      iter.current = 0;
    }

   

    

    // update position
    let scaleX = 0.3;
    let scaleY = 0.3;
    // check if fish is moving right
  

    // delete coin
    // update current frame
    update({
      type: "update",
      data: {
        x: clam.x,
        y: clam.y,
        scale: { x: scaleX, y: scaleY },
        anchor: 0.5,
      },
    });
  });

  return <Sprite image="../assets/background/shell.svg" {...motion} />;
};

export default Clam;
