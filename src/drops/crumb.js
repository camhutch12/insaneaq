
import {Sprite} from '@inlet/react-pixi'
import React, { useEffect, useState, useReducer, useRef  } from 'react'
import { useTick } from '@inlet/react-pixi'
import {CONSTANTS} from '../util/utilities'
/*
Written By:
Daniel Gannage (6368898)
Cameron Hutchings (6427892)
*/

/*
This component is a pixi.js sprite of an svg image of a crumb from icons8,
with a passed in x and y coordinate from the mouse listener
*/
const Crumb = ({crumb,deleteCrumb,players}) => {
    const [locationMouseClick, setlocationMouseClick] = useState(crumb);
    const reducer = (_, { data }) => data
    const [motion, update] = useReducer(reducer)
    const iter = useRef(0)
   
    useTick(delta => {

         // check if game has been paused
    if(!players.pause){
        // play game
  
        // increase the counter
        let i = (iter.current += 0.005 * delta)

        // give the crumb a lifespan once it hits the bottom
        if(crumb.y>CONSTANTS.MAXY){
            crumb.setThreshold(crumb.threshold+1)
        }
        
        // make the crumb fall
        if(crumb.y<CONSTANTS.MAXY){
            crumb.setPos(crumb.x,crumb.y+0.5);
        }
        
        // make the crumb spawn above the floorline
        if(crumb.y>window.innerHeight-80){
            crumb.setPos(crumb.x,window.innerHeight-80);
        }
        
        // delete crumb
        if(crumb.threshold>150){
            iter.current=0;
            deleteCrumb(crumb);
        }

        if(crumb.type == 0){
            // make silver

        }else{
            // make gold
        }

        // update current frame
        update({
            type: 'update',
            data: {
            x: crumb.x,
            y: crumb.y,
            scale:{x:0.25,y:0.25},
            anchor:0.5,
            }
        })
    }
    })   
    return <Sprite 
    image = {crumb.img}
    x={crumb.x-10}
    y={crumb.y-110}
    scale = {[0.2,0.2]}
    anchor = {0.5}
    />
    
}

export default Crumb;