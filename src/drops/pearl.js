import {Sprite} from '@inlet/react-pixi'
import React, { useEffect, useState, useReducer, useRef  } from 'react'
import { useTick } from '@inlet/react-pixi'

/*
Written By:
Daniel Gannage (6368898)
Cameron Hutchings (6427892)
*/

/*
This component is a pixi.js sprite of an svg image of a pearl from icons8,
with a passed in x and y coordinate from the fish
*/
const Pearl = ({pearl, deletePearl}) => {
    
    const reducer = (_, { data }) => data
    const [motion, update] = useReducer(reducer)
    const iter = useRef(0)
   
    useTick(delta => {

        // increase the counter
        let i = (iter.current += 0.005 * delta)

        // update current frame
        update({
            type: 'update',
            data: {
            x: pearl.x,
            y: pearl.y,
            scale:{x:pearl.size,y:pearl.size},
            anchor:0.5,
            image: pearl.img,
            }
        })
    })


    return <Sprite image={pearl.img} {...motion}/>
    
}

export default Pearl;