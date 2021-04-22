import {Sprite} from '@inlet/react-pixi'
import React, { useEffect, useState, useReducer, useRef  } from 'react'
import { useTick } from '@inlet/react-pixi'

/*
Written By:
Daniel Gannage (6368898)
Cameron Hutchings (6427892)
*/

/*
This component is a pixi.js sprite of an svg image of a coin from icons8,
with a passed in x and y coordinate from the mouse listener
*/
const Coin = ({coin}) => {
    
    const reducer = (_, { data }) => data
    const [motion, update] = useReducer(reducer)
    const iter = useRef(0)
   
    useTick(delta => {

        let i = (iter.current += 0.005 * delta)

        // make the coin fall
        if(coin.y<window.innerHeight-160){
            coin.setPos(coin.x,coin.y+i);
        }
        

        // update current frame
        update({
            type: 'update',
            data: {
            x: coin.x,
            y: coin.y,
            scale:{x:0.25,y:0.25},
            }
        })
    })


    return <Sprite 
    image = '../../assets/drops/silver.svg'
    {...motion}
    />
    
}

export default Coin;