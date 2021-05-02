import {Sprite} from '@inlet/react-pixi'
import React, { useEffect, useState } from 'react'

/*
Written By:
Daniel Gannage (6368898)
Cameron Hutchings (6427892)
*/

/*
This component is a pixi.js sprite of an svg bubble from icons8
with a random x and y coordinate
alpha makes it transparent
scale tranforms the size
*/
const Bubble  = (props) => {
    
 
    const rand = Math.random()*2.5;
    return <Sprite 
    image = '../../../assets/background/bub3.svg'
    x={props.bubble.x}
    y={props.bubble.y}
    scale = {[0.5,0.5]}
    alpha={0.2}
    />
    
}

export default Bubble;