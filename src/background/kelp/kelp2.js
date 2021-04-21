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
const Kelp2  = ({pos}) => {
    
    return <Sprite 
    image = '../../../assets/background/kelp2.svg'
    x={pos.x}
    y={pos.y}/>
    
}

export default Kelp2;