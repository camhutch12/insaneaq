import { Stage, Sprite, Graphics, useApp, Container, render } from '@inlet/react-pixi';
import React from 'react'
import Sand from './sand/sand';
import Bubble from './bubble/bubble';
import Coral from './coral/coral';
import Coral2 from './coral/coral2';
import Coral3 from './coral/coral3';
import Kelp from './kelp/kelp';
import Kelp2 from './kelp/kelp2';


const Background = () => {

  const createBubbles = () => {
    let bubbles = []
    for (let i = 0; i < 30; i++) {
      bubbles.push(<Bubble key={`bubble ${i}`} />);
      bubbles.push(<Kelp key={`kelp ${i}`} />);
      bubbles.push(<Kelp2 key={`kelp2 ${i}`}/>);
    }
    return bubbles;
  }

  const bub = createBubbles();
  const bubbles = bub.map((ele) => ele);

  return(
    <React.Fragment>
      <Sand />
      { bubbles }
      <Coral/>
      <Coral2/>
      <Coral3/>
    </React.Fragment> 
  );
}


export default Background