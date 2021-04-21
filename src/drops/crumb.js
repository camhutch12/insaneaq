import {Sprite} from '@inlet/react-pixi'
import React from 'react'

/*
Written By:
Daniel Gannage (6368898)
Cameron Hutchings (6427892)
*/

/*
This component is a pixi.js sprite of an svg image of a crumb from icons8,
with a passed in x and y coordinate from the mouse listener
*/
const Crumb = (props) => {
    if(props.hasCrumb){
        console.log("Inside")
    return <Sprite 
    image = '../../assets/drops/crumb.svg'
    x={props.crumb.x}
    y={props.crumb.y}
    scale = {[0.5,0.5]}
    />
    }else{
        console.log("broken")
        return null
    }
}

export default Crumb;