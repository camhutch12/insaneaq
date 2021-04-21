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
const Coral3  = (props) => {
    
    return <Sprite 
    image = '../../../assets/background/coral3.svg'
    x={window.innerWidth - window.innerWidth/1.2}
    y={window.innerHeight/1.1}
    />
    
}

export default Coral3;