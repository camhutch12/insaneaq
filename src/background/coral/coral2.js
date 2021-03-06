import {Sprite} from '@inlet/react-pixi'
import React from 'react'
import {CONSTANTS} from '../../util/utilities'

/*
Written By:
Daniel Gannage (6368898)
Cameron Hutchings (6427892)
*/

/*
This component is a pixi.js sprite of an svg image of a coral rock from icons8,
with a random x and y coordinate
*/
const Coral2  = (props) => {
    
    return <Sprite 
    image = '../../../assets/background/coral2.svg'
    x={window.innerWidth - window.innerWidth/9}
    y={(CONSTANTS.MAXY)/1.3}
   
    />
    
}

export default Coral2;