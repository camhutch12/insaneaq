import {Sprite} from '@inlet/react-pixi'
import React, { useEffect, useState } from 'react'

/*
Written By:
Daniel Gannage (6368898)
Cameron Hutchings (6427892)
*/

/*
This component is a pixi.js sprite of an svg image of a fish from icons8,
with a passed in x and y coordinate,
scale tranforms the size
*/
export  const GoldFish = ({x,y}) => { 
    const [pos, setPos] = useState({})
    const [defaultPos,setDefaultPos] = useState({x:Math.floor((Math.random() * document.documentElement.clientWidth)+1),
                                        y:Math.floor((Math.random() * document.documentElement.clientHeight)+1)})
    
    // useEffect(() => {
    //     return () => {

    //     }
    // },[]);
    //     if (props.pos.x === undefined || props.pos.y===undefined){
    //         setPos({x:0,y:0});
    //     }
    //     else{
    //         return setPos(props.pos)
    //     }


    return <Sprite 
    image={'assets/fish/goldfish.svg'} 
    x={x} 
    y={y} 
    scale={{x:0.2,y:0.2}} />
}

export default GoldFish