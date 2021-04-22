import {Sprite} from '@inlet/react-pixi'
import React,{useState,useEffect} from 'react'

/*
Written By:
Daniel Gannage (6368898)
Cameron Hutchings (6427892)
*/

/*
This component is a pixi.js sprite of an svg image of a coin from icons8,
with a passed in x and y coordinate from the mouse listener
*/
const Coin = (props) => {
    const [locationMouseClick, setlocationMouseClick] = useState(props.coin);
    
    return <Sprite 
    image = '../../assets/drops/silver.svg'
    x={props.coin.x-10}
    y={props.coin.y-110}
    scale = {[0.25,0.25]}
    />
    
}

export default Coin;