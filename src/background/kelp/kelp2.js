import {Sprite} from '@inlet/react-pixi'
import React from 'react'

/*
Written By:
Daniel Gannage (6368898)
Cameron Hutchings (6427892)
*/

/*
This component is a pixi.js sprite of an svg image of a kelp plant from icons8,
with a random x and y coordinate
*/
const Kelp2  = (props) => {
    
    return <Sprite 
    image = '../../../assets/background/kelp2.svg'
    x={Math.floor(Math.random() *  window.innerWidth)}
    y={document.documentElement.clientHeight/1.3 + Math.floor(Math.random() * (document.documentElement.clientHeight/6))}
   
    />
    
}

export default Kelp2;