import {Sprite} from '@inlet/react-pixi'
import React, { useEffect, useState, useReducer, useRef  } from 'react'
import { useTick } from '@inlet/react-pixi'
import { applyProps } from 'react-pixi-fiber'
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

export  const GoldFish = ({goldfish,crumb}) => { 
    const [pos, setPos] = useState({})
    // const [defaultPos,setDefaultPos] = useState({x:Math.floor((Math.random() * document.documentElement.clientWidth)+1),
    //                                     y:Math.floor((Math.random() * document.documentElement.clientHeight)+1)})
   
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
    const reducer = (_, { data }) => data
    const [motion, update] = useReducer(reducer)
    const iter = useRef(0)
   
    useTick(delta => {

        let i = (iter.current += 0.00001 * delta)
        
        

        // every 20 iterations (?) change the direction 
        if(i%20==0){


        }
        
        // if outside the right bounds, change direction left
        if(goldfish.x > window.innerWidth){
            goldfish.difference[0] = goldfish.difference[0] * -1;
            iter.current=0;
        }

        // if outside the bounds left, change direction right
        if(goldfish.x < 0){
             goldfish.difference[0] = goldfish.difference[0] * -1;
             iter.current=0;
        }

        // if outside the top bounds, change direction down
        if(goldfish.y < 0){
            goldfish.difference[1] = goldfish.difference[1] * -1;
            iter.current=0;
        }

        // if outside the bottom bounds, change direction up
        if(goldfish.y > window.innerHeight){
            goldfish.difference[1] = goldfish.difference[1] * -1;
            iter.current=0;
        }

        goldfish.setPosition(goldfish.x+(goldfish.difference[0]*i), 
        goldfish.y+(goldfish.difference[1]*i))

        let scaleX = 0.3;
        let scaleY = 0.3;
        if(goldfish.difference[0]>0){
            scaleX = scaleX*-1; // change direction of fish
        }
    
        
        // update current frame
        update({
            type: 'update',
            data: {
            x: goldfish.x,
            y: goldfish.y,
            scale:{x:scaleX,y:scaleY},
            anchor:0.5,
            }
        })
    })

    return <Sprite 
    image={'assets/fish/fish.svg'} 
    {...motion}
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