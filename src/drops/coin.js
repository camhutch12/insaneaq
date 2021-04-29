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
with a passed in x and y coordinate from the fish
*/
const Coin = ({coin, deleteCoin}) => {
    
    const reducer = (_, { data }) => data
    const [motion, update] = useReducer(reducer)
    const iter = useRef(0)
   
    useTick(delta => {

        // increase the counter
        let i = (iter.current += 0.005 * delta)

        // give the coin a lifespan once it hits the bottom
        if(coin.y>window.innerHeight-170){
            coin.setThreshold(coin.threshold+1)
        }
        
        // make the coin fall
        if(coin.y<window.innerHeight-160){
            coin.setPos(coin.x,coin.y+i);
        }
        
        // make the coin spawn above the floorline
        if(coin.y>window.innerHeight-160){
            coin.setPos(coin.x,window.innerHeight-160);
        }
        
        // delete coin
        if(coin.threshold>150){
            iter.current=0;
            deleteCoin(coin);
        }

        let image
        if(coin.type == 0){
            // make silver
            image = '../../assets/drops/silver.svg'
        }else if(coin.type == 1){
            // make gold
            image = '../../assets/drops/gold.svg'
        }else if(coin.type == 2){
            image = '../../assets/drops/diamond.svg'
        }
        
        let scale=0.25
        if(coin.type === 2){
            scale=0.15
        }

        // update current frame
        update({
            type: 'update',
            data: {
            x: coin.x,
            y: coin.y,
            scale:{x:scale,y:scale},
            anchor:0.5,
            image: image,
            }
        })
    })


    return <Sprite image = '../../assets/drops/silver.svg' {...motion}/>
    
}

export default Coin;