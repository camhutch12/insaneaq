import {Sprite} from '@inlet/react-pixi'
import React from 'react'

/*
Written By:
Daniel Gannage (6368898)
Cameron Hutchings (6427892)
*/

/*
This component is a pixi.js sprite of an svg image of a snail from icons8,
with a passed in x and y coordinate,
scale tranforms the size
*/
const Snail  = ({x,y}) => {
    
    return <Sprite 
    image = '../../../assets/background/snail.svg'
    x={x}
    y={y}
    scale = {[0.7,0.7]}
    />
    
}

export default Snail;