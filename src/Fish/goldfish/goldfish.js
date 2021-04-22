import {Sprite} from '@inlet/react-pixi'
import React, { useEffect, useState, useReducer, useRef  } from 'react'
import { useTick } from '@inlet/react-pixi'
import { applyProps } from 'react-pixi-fiber'
import { deleteCrumb } from '../../actions/crumbActions'
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
export  const GoldFish = ({goldfish,goldfishList,crumb,deleteCrumb, createCoin}) => { 
    goldfishList.forEach((element) => {
        element.crumb = null
        element.crumbList = []
    })
    const [pos, setPos] = useState({})

    const reducer = (_, { data }) => data
    const [motion, update] = useReducer(reducer)
    const iter = useRef(0)
   
    useTick(delta => {

        // increase the counter
        let i = (iter.current += 0.00001 * delta)

        // hunger timer
        goldfish.setHunger(goldfish.hungerTimer +1);

        // coin drop timer
        goldfish.setCoinDrop(goldfish.coinDropTimer +1);

         // Check if coin needs to drop
        if(goldfish.coinDropTimer > goldfish.dropRate){
            // reset timer
            goldfish.setCoinDrop(0)
            // add coin to array of coins (redux)
            createCoin({x:goldfish.x ,y:goldfish.y})
        }

        // every 20 iterations (?) change the direction 
        if(i%0.00001==0){
            //console.log("Hi")
            //iter.current=0;
            //goldfish.difference[1] = goldfish.difference[1] * -1;
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
        if(goldfish.y > (window.innerHeight-100)){
            goldfish.difference[1] = goldfish.difference[1] * -1;
            iter.current=0;
        }

        // check if crumbs exist
        if(crumb.length > 0){
            goldfish.setCrumbList(crumb)
            goldfish.getClosestCrumb()
            goldfish.direction[0] =  goldfish.crumb.x
            goldfish.direction[1] =  goldfish.crumb.y; 
            goldfish.difference[0] = goldfish.direction[0] - goldfish.x
            goldfish.difference[1] = goldfish.direction[1] - goldfish.y
        }
            
        // update position
        goldfish.setPosition(goldfish.x+(goldfish.difference[0]*i), 
        goldfish.y+(goldfish.difference[1]*i))
        
        let scaleX = 0.3;
        let scaleY = 0.3;
        // check if fish is moving right
        if(goldfish.difference[0]>0){
            scaleX = scaleX*-1; // change direction of fish
        }

        // delete crumb
        for(let j =0; j < crumb.length; j++){
            if(Math.floor(goldfish.x)  === crumb[j].x && Math.floor(goldfish.y) == crumb[j].y || 
            Math.ceil(goldfish.x)  === crumb[j].x && Math.ceil(goldfish.y) == crumb[j].y){
                console.log(crumb[j])
                deleteCrumb(crumb[j]);
                goldfish.crumb = null;
            }
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
