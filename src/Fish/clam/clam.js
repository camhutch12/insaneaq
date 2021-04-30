import { Sprite } from "@inlet/react-pixi";
import React, { useRef, useState, useReducer } from "react";
import { useTick } from "@inlet/react-pixi";
import { createPearl, deletePearl } from "../../actions/pearlActions";
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
const Clam = ({ pearlList,clam, coin, ...props }) => {
  clam.coin = null;
  clam.coinList = [];
  const [pos, setPos] = useState({});

  const reducer = (_, { data }) => data;
  const [motion, update] = useReducer(reducer);
  const iter = useRef(0);
  
  useTick((delta) => {
    // increase the counter
    
    let i = (iter.current += 0.00001 * delta);

    if(pearlList.length === 0 && clam.getCurrentTimer() > 10){
      // create a pearl
      props.createPearl(clam);
      clam.pearlCreated = true;
      clam.resetTimer()
    }
    else{
      // check if the timer is expired delete pearl
      if(clam.pearlCreated === true)
      if(pearlList[0].getCurrentTimer() > 30){
        pearlList[0].resetTimer()
        props.deletePearl(pearlList[0]);
        clam.pearlCreated = false;
        clam.startTimer();

      }
    }

   

    

    // update position
    let scaleX = clam.size;
    let scaleY = clam.size;
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

  return <Sprite image={clam.img} {...motion} />;
};

export default Clam;
