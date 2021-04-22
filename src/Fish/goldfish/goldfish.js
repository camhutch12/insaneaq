import {Sprite} from '@inlet/react-pixi'
import React, { useEffect, useState, useReducer, useRef  } from 'react'
import { useTick } from '@inlet/react-pixi'
import { propTypes } from 'react-bootstrap/esm/Image'
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
    
    const reducer = (_, { data }) => data
    const [motion, update] = useReducer(reducer)
    const iter = useRef(0)
   
    useTick(delta => {

        let i = (iter.current += 0.5 * delta)
        let j = (iter.current += 0.5 * delta)


        // update current frame
        update({
            type: 'update',
            data: {
            x: x + i,
            y: y + j,
            scale:{x:0.3,y:0.3},
            },
        })

        
    })
   

    return <Sprite 
    image={'assets/fish/fish.svg'} 
    {...motion}
    //x={x} 
    //y={y} 
    //scale={{x:0.3,y:0.3}} 
    />
}

export default GoldFish


/*
// every 20 iterations (?) change the direction 
        if(i%20==0){


        }
        
        // if outside the right bounds, change direction left
        if(i>window.innerWidth){
            i=-window.innerWidth;

        }

        // if outside the bounds left, change direction right
        if(i<window.innerWidth){
             i=i+x;

        }

        // if outside the top bounds, change direction down
        if(j<window.innerHeight){
             j=j+y;

        }

        // if outside the bottom bounds, change direction up
        if( j>window.innerHeight){
            j=-window.innerHeight;

        }
*/