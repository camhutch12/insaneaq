import { Stage, Sprite, Graphics, useApp, Container, render } from '@inlet/react-pixi';
import React from 'react'
import Sand from './sand/sand';
import Bubble from './bubble/bubble';
import Coral from './coral/coral';
import Coral2 from './coral/coral2';
import Coral3 from './coral/coral3';
import Kelp from './kelp/kelp';
import Kelp2 from './kelp/kelp2';

/* Creates a background component which contains bubbles kelp */
const Background = ({background}) => {
  const createBubbles = () => {
 
    const b = background.bubble.map((ele,index) => <Bubble bubble={ele}/>)
    const c = background.kelp.map((ele,index) => <Kelp pos={ele}/>)
    const d = background.kelp2.map((ele,index) => <Kelp2 pos={ele}/>)
    return [b,c,d]  
  }

  const bub = createBubbles();
 // const bubbles = bub.map((ele) => ele);

  return(
    <React.Fragment>
      <Sand />
      {bub}
      {/* { bubbles } */}
      <Coral/>
      <Coral2/>
      <Coral3/>
    </React.Fragment> 
  );
}


export default Background