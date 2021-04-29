
import {Sprite} from '@inlet/react-pixi'
import React, { useEffect, useState, useReducer, useRef  } from 'react'
import { useTick } from '@inlet/react-pixi'
import {deleteBlaster} from '../actions/blasterActions'
/*
Written By:
Daniel Gannage (6368898)
Cameron Hutchings (6427892)
*/

/*
This component is a pixi.js sprite of an svg image of a blast from icons8,
with a passed in x and y coordinate from the mouse listener
*/
const Blaster = ({blaster,deleteBlaster}) => {
    const [locationMouseClick, setlocationMouseClick] = useState(blaster);
    const reducer = (_, { data }) => data
    const [motion, update] = useReducer(reducer)
    const iter = useRef(0)
   
    useTick(delta => {

        // increase the counter
        let i = (iter.current += 0.005 * delta)

        // give the blaster a lifespan
        blaster.setThreshold(blaster.threshold+10)
        // delete blaster
        if(blaster.threshold>50){
            iter.current=0;
            deleteBlaster(blaster);
        }
        
        
        // make the blaster spawn above the floorline
        if(blaster.threshold%10==0){
            blaster.setScale(blaster.scale - 0.2);
        }
        
        

        // update current frame
        update({
            type: 'update',
            data: {
            x: blaster.x-10,
            y: blaster.y-110,
            scale:{x:0.75+blaster.scale,y:0.75+blaster.scale},
            anchor:0.5,
            }
        })
    })   
    return <Sprite 
    image = '../../assets/gun/blasterRing.svg'
    {...motion}
    />
    
}

export default Blaster;