import {Sprite} from '@inlet/react-pixi'
import React from 'react'

/*
Written By:
Daniel Gannage (6368898)
Cameron Hutchings (6427892)
*/

/*
This component is a pixi.js sprite of an svg image of a coral rock from icons8,
with a random x and y coordinate
*/
const Coral  = (props) => {
    
    return <Sprite 
    image = '../../../assets/background/coral1.svg'
    x={0}
    y={(window.innerHeight-100)/1.3}
   
    />
    
}

export default Coral;